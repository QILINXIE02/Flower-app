import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const BouquetContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const FlowerBouquet = ({ colors }) => {
  const randomizeFlowers = (colors) => {
    // Add logic to randomize flowers based on colors
    return colors.map((color, index) => (
      <Text key={index} style={{ color }}>
        Flower {index + 1}
      </Text>
    ));
  };

  return <BouquetContainer>{randomizeFlowers(colors)}</BouquetContainer>;
};

export default FlowerBouquet;
