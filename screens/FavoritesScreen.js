import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FlowerBouquet = ({ bouquet, onAddFavorite }) => {
  const renderItem = ({ item }) => (
    <View style={styles.flowerContainer}>
      <Text style={styles.flowerName}>• {item.name}</Text>
      <TouchableOpacity onPress={() => onAddFavorite(item)}>
        <Ionicons name="heart-outline" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {bouquet ? (
        <FlatList
          data={bouquet.flowers}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.placeholderText}>Generate a bouquet to see flowers</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  flowerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  flowerName: {
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    marginLeft: 'auto',
    marginRight: 10,
  },
  placeholderText: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default FlowerBouquet;
