import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Slider from '@react-native-community/slider';
import tinycolor from 'tinycolor2'; // Assuming you use this library for color handling
import ColorPalettePicker from './ColorPalettePicker'; // Import ColorPalettePicker component

const HoloColorPicker = ({ onColorSelected }) => {
  const [hue, setHue] = useState(0);
  const [selectedColors, setSelectedColors] = useState([]);

  const handleHueChange = (value) => {
    setHue(value);
    const color = tinycolor({ h: value, s: 100, l: 50 }).toHexString();
    onColorSelected(color);
  };

  const handleColorsSelected = (colors) => {
    setSelectedColors(colors);
  };

  return (
    <View style={styles.container}>
      <View style={styles.colorPickerContainer}>
        <Slider
          minimumValue={0}
          maximumValue={360}
          step={1}
          value={hue}
          onValueChange={handleHueChange}
          style={styles.slider}
        />
        <FlatList
          data={selectedColors}
          keyExtractor={(color, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={[styles.colorBlock, { backgroundColor: item }]} />
          )}
          horizontal
          contentContainerStyle={styles.selectedColorsContainer}
        />
      </View>
      <ColorPalettePicker onColorsSelected={handleColorsSelected} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  colorPickerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    width: '80%',
    marginVertical: 10,
  },
  selectedColorsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  colorBlock: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default HoloColorPicker;
