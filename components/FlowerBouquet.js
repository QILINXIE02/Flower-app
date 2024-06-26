import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Button } from 'react-native';

const FlowerBouquet = ({ bouquet, onAddFavorite }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.itemText}>{item.name}</Text>
      <Button title="Add to Favorites" onPress={() => onAddFavorite(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Bouquet</Text>
      <FlatList
        data={bouquet.flowers}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,  // 50 * 3
    height: 150, // 50 * 3
    marginRight: 10,
  },
  itemText: {
    fontSize: 18,
    flex: 1,
  },
});

export default FlowerBouquet;
