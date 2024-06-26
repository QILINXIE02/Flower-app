import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { ColorPicker } from 'react-native-color-picker';
import Slider from '@react-native-community/slider';
import MyButton from './MyButton';

const ColorPalettePicker = ({ onColorsSelected }) => {
  const [selectedColors, setSelectedColors] = useState([]);

  const handleColorSelect = (color) => {
    setSelectedColors([...selectedColors, color]);
  };

  const handleSubmit = () => {
    if (selectedColors.length >= 1) {
      onColorsSelected(selectedColors);
    } else {
      Alert.alert('Please select at least 1 color.');
    }
  };

  return (
    <View style={styles.container}>
      <ColorPicker
        onColorSelected={handleColorSelect}
        style={styles.colorPicker}
        sliderComponent={Slider}
      />
      <View style={styles.selectedColorsContainer}>
        <FlatList
          data={selectedColors}
          keyExtractor={(color, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={[styles.colorBlock, { backgroundColor: item }]} />
          )}
          horizontal
        />
      </View>
      <MyButton onPress={handleSubmit} title="Confirm colors" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  colorPicker: {
    flex: 1,
    height: 200,
    width: '100%',
  },
  selectedColorsContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  colorBlock: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default ColorPalettePicker;
