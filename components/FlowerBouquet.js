import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlowerBouquet = ({ colors }) => {
  const randomizeFlowers = (colors) => {
    // Placeholder function; actual logic to be implemented based on the API response
    return colors.map((color, index) => (
      <View key={index} style={[styles.flower, { backgroundColor: color }]}>
        <Text style={styles.flowerText}>Flower {index + 1}</Text>
      </View>
    ));
  };

  return <View style={styles.container}>{randomizeFlowers(colors)}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  flower: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flowerText: {
    color: '#fff',
  },
});

export default FlowerBouquet;
