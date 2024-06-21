import React from 'react';
import { View } from 'react-native';
import Favorites from '../components/Favorites';
import styled from 'styled-components/native';

const FavoritesContainer = styled.View`
  flex: 1;
  padding: 20px;
`;

const FavoritesScreen = () => {
  return (
    <FavoritesContainer>
      <Favorites />
    </FavoritesContainer>
  );
};

export default FavoritesScreen;
