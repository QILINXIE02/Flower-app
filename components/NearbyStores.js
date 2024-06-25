import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import styled from 'styled-components/native';

const StoreContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const NearbyStores = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      const response = await axios.get(
        `https://auth-api-1-8tur.onrender.com/api/v1/store`
      );

      setStores(response.data.results);
    };

    fetchStores();
  }, []);

  return (
    <StoreContainer>
      <FlatList
        data={stores}
        keyExtractor={(item) => item.place_id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </StoreContainer>
  );
};

export default NearbyStores;
