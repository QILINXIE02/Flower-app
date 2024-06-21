import React, { useState } from 'react';
import { View, Button } from 'react-native';
import ColorPalettePicker from '../components/ColorPalettePicker';
import FlowerBouquet from '../components/FlowerBouquet';
import styled from 'styled-components/native';

const HomeContainer = styled.View`
  flex: 1;
  padding: 20px;
`;

const HomeScreen = ({ navigation }) => {
  const [colors, setColors] = useState([]);

  return (
    <HomeContainer>
      <ColorPalettePicker onColorsSelected={setColors} />
      <FlowerBouquet colors={colors} />
      <Button title="Find Nearby Stores" onPress={() => navigation.navigate('StoreScreen')} />
    </HomeContainer>
  );
};

export default HomeScreen;
