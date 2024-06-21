import React from 'react';
import { View } from 'react-native';
import NearbyStores from '../components/NearbyStores';
import styled from 'styled-components/native';

const StoreContainer = styled.View`
  flex: 1;
  padding: 20px;
`;

const StoreScreen = () => {
  return (
    <StoreContainer>
      <NearbyStores />
    </StoreContainer>
  );
};

export default StoreScreen;
