import React, { useState } from 'react';
import { View, Button } from 'react-native';
import HoloColorPicker from 'your-path-to/HoloColorPicker'; // Adjust the import path as per your project
import Slider from '@react-native-community/slider'; // Import Slider from @react-native-community/slider

const ColorPalettePicker = ({ onColorsSelected }) => {
  const [selectedColors, setSelectedColors] = useState([]);

  const handleColorSelect = (color) => {
    if (selectedColors.length < 7) {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handleSubmit = () => {
    if (selectedColors.length >= 3) {
      onColorsSelected(selectedColors);
    } else {
      alert("Please select at least 3 colors.");
    }
  };

  return (
    <View>
      <HoloColorPicker
        onColorSelected={handleColorSelect}
        style={{ flex: 1, height: 200 }}
        sliderComponent={Slider} // Ensure to pass Slider component here
      />
      <Button title="Generate Bouquet" onPress={handleSubmit} />
    </View>
  );
};

export default ColorPalettePicker;
