import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';
import { getFavorites } from '../utils/storage'; // Import getFavorites

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const retrievedFavorites = await getFavorites();
      setFavorites(retrievedFavorites);
    };

    fetchFavorites();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Favorites</Text>
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.id}-${index}`} // Ensure unique key
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Light background color
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  list: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 2, // Add shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
});

export default FavoritesScreen;
