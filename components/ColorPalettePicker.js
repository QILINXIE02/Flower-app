import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import MyButton from './MyButton';

const ColorPalettePicker = ({ onColorsSelected }) => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [currentColor, setCurrentColor] = useState('#000000');

  const handleColorChange = (color) => {
    setCurrentColor(color);
  };

  const addColor = () => {
    if (!selectedColors.includes(currentColor)) {
      setSelectedColors([...selectedColors, currentColor]);
    } else {
      Alert.alert('Color already selected.');
    }
  };

  const handleSubmit = () => {
    if (selectedColors.length > 0) {
      onColorsSelected(selectedColors);
    } else {
      Alert.alert('Please select at least 1 color.');
    }
  };

  return (
    <View style={styles.container}>
      <ColorPicker
        color={currentColor}
        onColorChange={handleColorChange}
        thumbSize={40}
        sliderSize={40}
        noSnap={true}
        row={false}
        swatches={false}
        style={styles.colorPicker}
      />
      <MyButton onPress={addColor} title="Add Color" />
      <FlatList
        data={selectedColors}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        style={styles.selectedColorsContainer}
        renderItem={({ item }) => (
          <View style={[styles.colorBlock, { backgroundColor: item }]} />
        )}
      />
      <MyButton onPress={handleSubmit} title="Confirm colors" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  colorPicker: {
    width: 300,
    height: 300,
  },
  selectedColorsContainer: {
    marginVertical: 10,
  },
  colorBlock: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default ColorPalettePicker;
