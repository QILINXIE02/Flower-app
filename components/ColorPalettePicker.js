
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Alert,
  Text,
  Pressable,
} from 'react-native';
import MyButton from './MyButton';

const COLORS = [
  '#FF0000',
  '#FF69B4',
  '#FFC0CB',
  '#FF8C00',
  '#FFFF00',
  '#800080',
  '#9370DB',
  '#0000FF',
  '#00BFFF',
  '#008000',
  '#90EE90',
  '#A52A2A',
  '#FFFFFF',
  '#000000',
];

const ColorPalettePicker = ({ onColorsSelected }) => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [currentColor, setCurrentColor] = useState('#FF69B4');

  const addColor = () => {
    if (selectedColors.includes(currentColor)) {
      Alert.alert('Color already selected.');
      return;
    }

    setSelectedColors(previous => [...previous, currentColor]);
  };

  const removeColor = (color) => {
    setSelectedColors(previous =>
      previous.filter(item => item !== color)
    );
  };

  const handleSubmit = () => {
    if (selectedColors.length === 0) {
      Alert.alert('Please select at least 1 color.');
      return;
    }

    onColorsSelected(selectedColors);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose a color</Text>

      <View style={styles.colorGrid}>
        {COLORS.map(color => (
          <Pressable
            key={color}
            onPress={() => setCurrentColor(color)}
            style={[
              styles.colorOption,
              { backgroundColor: color },
              currentColor === color && styles.selectedColor,
            ]}
          />
        ))}
      </View>

      <View style={styles.previewContainer}>
        <Text style={styles.label}>Selected color:</Text>

        <View
          style={[
            styles.preview,
            { backgroundColor: currentColor },
          ]}
        />
      </View>

      <MyButton
        onPress={addColor}
        title="Add Color"
      />

      <Text style={styles.heading}>Your color palette</Text>

      <FlatList
        data={selectedColors}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.selectedColorsContainer}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => removeColor(item)}
            style={[
              styles.colorBlock,
              { backgroundColor: item },
            ]}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No colors added yet.
          </Text>
        }
      />

      <Text style={styles.hint}>
        Tap a color in your palette to remove it.
      </Text>

      <MyButton
        onPress={handleSubmit}
        title="Confirm Colors"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
    color: '#333',
  },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 10,
  },
  colorOption: {
    width: 42,
    height: 42,
    borderRadius: 21,
    margin: 7,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedColor: {
    borderWidth: 4,
    borderColor: '#333',
  },
  previewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  label: {
    fontSize: 16,
    marginRight: 12,
  },
  preview: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#333',
  },
  selectedColorsContainer: {
    maxHeight: 55,
    marginVertical: 10,
  },
  colorBlock: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  emptyText: {
    color: '#888',
    padding: 10,
  },
  hint: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
  },
});

export default ColorPalettePicker;
