import React, { useState } from 'react';
import { View } from 'react-native';
import Slider from '@react-native-community/slider';
import tinycolor from 'tinycolor2'; // Assume you use this library to handle color conversions

const HoloColorPicker = ({ onColorSelected }) => {
  const [hue, setHue] = useState(0);

  const handleHueChange = (value) => {
    setHue(value);
    const color = tinycolor({ h: value, s: 100, l: 50 }).toHexString();
    onColorSelected(color);
  };

  return (
    <View>
      <Slider
        minimumValue={0}
        maximumValue={360}
        step={1}
        value={hue}
        onValueChange={handleHueChange}
        style={{ width: '100%', height: 40 }}
      />
    </View>
  );
};

export default HoloColorPicker;
