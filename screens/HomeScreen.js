import React, { useState } from 'react';
import { View, StyleSheet, Alert, ScrollView, Text } from 'react-native';
import ColorPalettePicker from '../components/ColorPalettePicker';
import MyButton from '../components/MyButton';
import FlowerBouquet from '../components/FlowerBouquet';
import { saveFavorite } from '../utils/storage';
import { generateRandomBouquet } from '../utils/flowerData';

const HomeScreen = ({ navigation }) => {
  const [colors, setColors] = useState([]);
  const [bouquet, setBouquet] = useState(null);

  const handleGenerateBouquet = () => {
    if (colors.length >= 1) {
      const generatedBouquet = generateRandomBouquet(colors);
      setBouquet(generatedBouquet);
    } else {
      Alert.alert('Please choose at least 1 color');
    }
  };

  const handleAddFavorite = async (flower) => {
    try {
      await saveFavorite(flower);
      Alert.alert(`Added ${flower.name} to favorites`);
    } catch (error) {
      console.error('Error saving favorite:', error);
      Alert.alert('Failed to add flower to favorites. Please try again.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Choose your favorite colors below to craft a beautiful bouquet! Click on a color to confirm your selection. Then proceed to generate your bouquets.
        </Text>
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Color Palette:</Text>
          <ColorPalettePicker onColorsSelected={setColors} />
        </View>
        <View style={styles.middleContainer}>
          <MyButton onPress={handleGenerateBouquet} title="Generate Bouquet(s)" />
          {bouquet && <FlowerBouquet bouquet={bouquet} onAddFavorite={handleAddFavorite} />}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  pickerContainer: {
    flex: 1,
    width: '100%',
    marginBottom: 20,
  },
  pickerLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  middleContainer: {
    alignItems: 'center',
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
});

export default HomeScreen;
