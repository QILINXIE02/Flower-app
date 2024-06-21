import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';

const FavoritesContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getFavorites = async () => {
      const jsonValue = await AsyncStorage.getItem('@bouquet_favorites');
      setFavorites(jsonValue != null ? JSON.parse(jsonValue) : []);
    };

    getFavorites();
  }, []);

  return (
    <FavoritesContainer>
      <FlatList
        data={favorites}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </FavoritesContainer>
  );
};

export default Favorites;
