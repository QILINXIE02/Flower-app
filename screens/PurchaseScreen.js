import React, { useState, useRef } from 'react';
import { View, Text, Image, Button, StyleSheet, Alert, ImageBackground } from 'react-native';
import { addToCart } from '../utils/cart';

const PurchaseScreen = ({ route, navigation }) => {
  const { item } = route.params || {};
  const [quantity, setQuantity] = useState(1);
  const pickerContainerRef = useRef(null);

  const handleAddToCart = async () => {
    if (!item) {
      Alert.alert('Item not found. Please try again.');
      return;
    }
    try {
      await addToCart({ ...item, quantity });
      Alert.alert(`${item.name} added to cart`);
      navigation.navigate('PurchaseScreen', { item });
    } catch (error) {
      console.error('Error adding to cart:', error);
      Alert.alert('Failed to add item to cart. Please try again.');
    }
  };

  if (!item) {
    return (
      <View style={styles.container}>
        <Text>No item found.</Text>
      </View>
    );
  }

  return (
    <ImageBackground source={require('../assets/purchase.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.quantityContainer}>
          <Button title="-" onPress={() => setQuantity(Math.max(1, quantity - 1))} />
          <Text style={styles.quantity}>{quantity}</Text>
          <Button title="+" onPress={() => setQuantity(quantity + 1)} />
        </View>
        <Button title="Add to Cart" onPress={handleAddToCart} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  price: {
    fontSize: 20,
    color: '#888',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 10,
    color: '#fff',
  },
});

export default PurchaseScreen;
