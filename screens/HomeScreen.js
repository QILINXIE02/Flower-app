import React, { useState } from 'react';
import { View, Button } from 'react-native';
import ColorPalettePicker from '../components/ColorPalettePicker';
import FlowerBouquet from '../components/FlowerBouquet';
import { saveBouquet } from '../utils/storage'; // Import storage function
import { generateRandomBouquet } from '../utils/flowerRandomizer'; // Import flower randomizer

const HomeScreen = ({ navigation }) => {
  const [colors, setColors] = useState([]);
  const [bouquet, setBouquet] = useState(null); // State to store generated bouquet

  const handleSaveBouquet = async () => {
    if (bouquet) {
      await saveBouquet(bouquet); // Save bouquet to history
      alert('Bouquet saved to history!');
    }
  };

  const handleGenerateBouquet = () => {
    if (colors.length >= 3) {
      const generatedBouquet = generateRandomBouquet(colors);
      setBouquet(generatedBouquet); // Store generated bouquet
    } else {
      alert('Please choose at least 3 colors');
    }
  };

  return (
    <View>
      <ColorPalettePicker onColorsSelected={setColors} />
      <FlowerBouquet colors={colors} />
      <Button title="Generate Bouquet" onPress={handleGenerateBouquet} />
      {bouquet && <Button title="Save Bouquet" onPress={handleSaveBouquet} />}
    </View>
  );
};

export default HomeScreen;
