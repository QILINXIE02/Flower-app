import React from 'react';
import { View } from 'react-native';
import History from '../components/History';
import styled from 'styled-components/native';

const HistoryContainer = styled.View`
  flex: 1;
  padding: 20px;
`;

const HistoryScreen = () => {
  return (
    <HistoryContainer>
      <History />
    </HistoryContainer>
  );
};

export default HistoryScreen;
