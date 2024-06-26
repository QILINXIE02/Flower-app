import React, { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import History from '../components/History'; // Import History component (optional)
import { getHistory } from '../utils/storage'; // Import storage function

const HistoryScreen = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const retrievedHistory = await getHistory();
      setHistory(retrievedHistory);
    };

    fetchHistory();
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 20 }}>
      <Text>Date: {item.date}</Text>
      <FlatList
        data={item.bouquet.flowers}
        renderItem={({ item }) => <Text>• {item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* You can use the History component here for styling (optional) */}
      <FlatList
        data={history}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default HistoryScreen;
