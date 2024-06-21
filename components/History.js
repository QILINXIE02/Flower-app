import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';

const HistoryContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const getHistory = async () => {
      const jsonValue = await AsyncStorage.getItem('@bouquet_history');
      setHistory(jsonValue != null ? JSON.parse(jsonValue) : []);
    };

    getHistory();
  }, []);

  return (
    <HistoryContainer>
      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </HistoryContainer>
  );
};

export default History;
