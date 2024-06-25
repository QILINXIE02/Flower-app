// Flower-app/screens/HomeScreen.js

import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, Alert } from 'react-native';
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
    <View style={styles.container}>
      <ColorPalettePicker onColorsSelected={setColors} />
      <FlowerBouquet colors={colors} />

      <MyButton onPress={handleGenerateBouquet} title="Generate Bouquet" />

      {bouquet && (
        <MyButton onPress={handleSaveBouquet} title="Save Bouquet" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

export default HomeScreen;
