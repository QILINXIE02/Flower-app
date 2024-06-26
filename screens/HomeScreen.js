import React, { useState } from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import ColorPalettePicker from '../components/ColorPalettePicker';
import MyButton from '../components/MyButton';
import FlowerBouquet from '../components/FlowerBouquet';
import { saveBouquet } from '../utils/storage'; // Import storage function
import { generateRandomBouquet } from '../utils/flowerRandomizer'; // Import flower randomizer

const HomeScreen = ({ navigation }) => {
  const [colors, setColors] = useState([]);
  const [bouquet, setBouquet] = useState(null); // State to store generated bouquet

  const handleSaveBouquet = async () => {
    if (bouquet) {
      await saveBouquet(bouquet); // Save bouquet to history
      Alert.alert('Bouquet saved to history!');
    } else {
      Alert.alert('No bouquet generated to save.');
    }
  };

  const handleGenerateBouquet = () => {
    if (colors.length >= 1) {
      const generatedBouquet = generateRandomBouquet(colors);
      setBouquet(generatedBouquet); // Store generated bouquet
    } else {
      Alert.alert('Please choose at least 1 color');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.pickerContainer}>
        <ColorPalettePicker onColorsSelected={setColors} />
      </View>

      <View style={styles.middleContainer}>
        <MyButton onPress={handleGenerateBouquet} title="Generate Bouquet" />
        <FlowerBouquet colors={colors} horizontal />
        {bouquet && <MyButton onPress={handleSaveBouquet} title="Save Bouquet" />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'bottom',
    paddingVertical: 20,
  },
  pickerContainer: {
    flex: 1,
    width: '80%',
    marginBottom: 0,
  },
  middleContainer: {
    alignItems: 'center',
  },
});

export default HomeScreen;
