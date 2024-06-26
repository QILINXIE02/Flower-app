import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getFavorites } from '../utils/storage'; 

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
    <View>
      {/* Display details of the favorited bouquet (colors, flowers) */}
      <Text>Colors: {item.colors.join(', ')}</Text>
      <FlatList
        data={item.flowers}
        renderItem={({ item }) => <Text>• {item.name}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );

  return (
    <View>
      <FlatList data={favorites} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default FavoritesScreen;
