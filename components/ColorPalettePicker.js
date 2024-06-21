import React, { useState } from 'react';
import { View } from 'react-native';
import { ColorPicker } from 'react-native-color-picker';
import styled from 'styled-components/native';

const PickerContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ColorPalettePicker = ({ onColorsSelected }) => {
  const [colors, setColors] = useState([]);

  const handleColorChange = (color) => {
    if (colors.length < 7) {
      setColors([...colors, color]);
      onColorsSelected([...colors, color]);
    }
  };

  return (
    <PickerContainer>
      <ColorPicker
        onColorSelected={handleColorChange}
        style={{ flex: 1, width: '100%' }}
      />
    </PickerContainer>
  );
};

export default ColorPalettePicker;
