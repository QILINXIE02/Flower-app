import React from 'react';
import { View, Text, Image } from 'react-native';

// Helper function to get image source
const getImageSource = (imagePath) => {
  switch(imagePath) {
    case 'flower_img/roses_multi.jpg':
      return require('../flower_img/roses_multi.jpg');
    // Add other cases for different images if needed
    default:
      return require('../flower_img/default.jpg'); // fallback image
  }
};

const StoreItem = ({ storeData }) => {
  return (
    <View>
      <Text>{storeData.name}</Text>
      <Text>{storeData.colors}</Text>
      <Image source={getImageSource(storeData.image)} style={{ width: 100, height: 100 }} />
    </View>
  );
};

export default StoreItem;
