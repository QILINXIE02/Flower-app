import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native';
import { getCart, clearCart } from '../utils/cart'; // Import clearCart function

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cart = await getCart();
        // Combine items with the same name and calculate total quantity
        const combinedCart = combineCartItems(cart);
        setCartItems(combinedCart);
      } catch (error) {
        console.error('Error fetching cart items:', error);
        // Handle error fetching cart items
      }
    };

    fetchCartItems();
  }, []);

  // Function to combine items with the same name
  const combineCartItems = (cart) => {
    const combined = [];
    cart.forEach((item) => {
      const existingItem = combined.find((c) => c.name === item.name);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        combined.push({ ...item });
      }
    });
    return combined;
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.priceText}>${item.price}</Text>
      <Text style={styles.quantityText}>Quantity: {item.quantity}</Text>
    </View>
  );

  const handleCheckout = () => {
    // Implement your checkout logic here
    Alert.alert('Checkout', 'Proceed to checkout functionality to be implemented.');
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        contentContainerStyle={styles.list}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${calculateTotalPrice()}</Text>
        <Button title="Checkout" onPress={handleCheckout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  list: {
    flexGrow: 1,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  priceText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 5,
  },
  quantityText: {
    fontSize: 14,
    color: '#666',
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CartScreen;
