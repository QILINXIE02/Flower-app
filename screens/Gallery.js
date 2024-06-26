import React from 'react';
import { View, StyleSheet } from 'react-native';
import Gallery from '../components/Gallery';

const GalleryScreen = () => {
  return (
    <View style={styles.container}>
      <Gallery />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GalleryScreen;
