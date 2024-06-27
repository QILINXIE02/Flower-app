import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, Alert } from 'react-native';
import { addToCart } from '../utils/cart';

const PurchaseScreen = ({ route, navigation }) => {
  const { item } = route.params || {}; // Ensure route.params.item is safely accessed
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
    if (!item) {
      Alert.alert('Item not found. Please try again.');
      return;
    }
    try {
      await addToCart({ ...item, quantity });
      Alert.alert(`${item.name} added to cart`);
      navigation.goBack();
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
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
  },
  price: {
    fontSize: 20,
    color: '#888',
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 10,
  },
});

export default PurchaseScreen;
