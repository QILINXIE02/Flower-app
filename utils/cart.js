import AsyncStorage from '@react-native-async-storage/async-storage';

const getCart = async () => {
  try {
    const cart = await AsyncStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error('Error getting cart:', error);
    return [];
  }
};

const addToCart = async (item) => {
  try {
    const cart = await getCart();
    cart.push(item);
    await AsyncStorage.setItem('cart', JSON.stringify(cart));
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error; // Ensure errors are propagated for debugging
  }
};

export { getCart, addToCart };
