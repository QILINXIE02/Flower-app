import React from 'react';
import { View, Text } from 'react-native';

const FlowerBouquet = ({ colors }) => {
  const randomizeFlowers = (colors) => {
    // Placeholder function; actual logic to be implemented based on the API response
    return colors.map((color, index) => (
      <Text key={index} style={{ color }}>
        Flower {index + 1}
      </Text>
    ));
  };

  return <View>{randomizeFlowers(colors)}</View>;
};

export default FlowerBouquet;
