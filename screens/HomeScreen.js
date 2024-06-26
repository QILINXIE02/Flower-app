import React, { useState } from 'react';
import { View, StyleSheet, Alert, ScrollView, Text } from 'react-native';
import ColorPalettePicker from '../components/ColorPalettePicker';
import MyButton from '../components/MyButton';
import FlowerBouquet from '../components/FlowerBouquet'; // Assuming FlowerBouquet doesn't use FlatList
import { saveFavorite } from '../utils/storage';
import { generateRandomBouquet } from '../utils/flowerRandomizer';

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
          Craft a beautiful bouquet! Choose your favorite colors below. Click on a color to confirm your selection. Then proceed to generate your bouquet.
        </Text>
        <View style={styles.pickerContainer}>
          <ColorPalettePicker onColorsSelected={setColors} />
        </View>
        <View style={styles.middleContainer}>
          <MyButton onPress={handleGenerateBouquet} title="Generate Bouquet" />
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
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 50,
  },
  pickerContainer: {
    flex: 1,
    width: '100%',
    marginBottom: 20,
  },
  middleContainer: {
    alignItems: 'center',
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default HomeScreen;
