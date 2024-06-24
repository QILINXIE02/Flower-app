import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { ColorPicker } from 'react-native-color-picker';

const ColorPalettePicker = ({ onColorsSelected }) => {
  const [selectedColors, setSelectedColors] = useState([]);

  const addColor = (color) => {
    if (selectedColors.length < 7) {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const removeColor = (color) => {
    setSelectedColors(selectedColors.filter(c => c !== color));
  };

  return (
    <View>
      <ColorPicker
        onColorSelected={color => {
          if (selectedColors.includes(color)) {
            removeColor(color);
          } else {
            addColor(color);
          }
          onColorsSelected(selectedColors);
        }}
        style={{ flex: 1, height: 300 }}
      />
      <Button
        title="Done"
        onPress={() => onColorsSelected(selectedColors)}
        disabled={selectedColors.length < 3}
      />
    </View>
  );
};

export default ColorPalettePicker;
