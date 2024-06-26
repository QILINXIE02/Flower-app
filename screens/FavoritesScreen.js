import React, { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
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
    <View style={{ marginBottom: 20 }}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Favorites</Text>
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default FavoritesScreen;
