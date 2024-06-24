import React, { useState } from 'react';
import { View, Button } from 'react-native';
import ColorPalettePicker from '../components/ColorPalettePicker';
import FlowerBouquet from '../components/FlowerBouquet';
import { addToFavorites } from '../utils/storage'; // Import storage function

const HomeScreen = ({ navigation }) => {
  const [colors, setColors] = useState([]);
  const [bouquet, setBouquet] = useState(null); // State to store generated bouquet

  const handleSaveBouquet = async () => {
    if (bouquet) {
      await addToFavorites(bouquet); // Save bouquet to favorites
      alert('Bouquet saved to favorites!');
    }
  };

  const handleGenerateBouquet = () => {
    if (colors.length >= 3) {
      const generatedFlowers = generateRandomFlowers(colors);
      setBouquet({ colors, flowers: generatedFlowers }); // Store bouquet data
    } else {
      alert('Please choose at least 3 colors');
    }
  };

  return (
    <View>
      <ColorPalettePicker onColorsSelected={setColors} />
      <FlowerBouquet colors={colors} />
      <Button title="Generate Bouquet" onPress={handleGenerateBouquet} />
      {bouquet && <Button title="Save to Favorites" onPress={handleSaveBouquet} />}
    </View>
  );
};

export default HomeScreen;
