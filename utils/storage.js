import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveBouquet = async (bouquet) => {
  try {
    const jsonValue = JSON.stringify(bouquet);
    await AsyncStorage.setItem('@bouquet_history', jsonValue);
  } catch (e) {
    console.error('Error saving bouquet', e);
  }
};

export const getBouquets = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@bouquet_history');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Error retrieving bouquets', e);
  }
};

export const addToFavorites = async (bouquet) => {
  try {
    const jsonValue = JSON.stringify(bouquet);
    await AsyncStorage.setItem('@bouquet_favorites', jsonValue);
  } catch (e) {
    console.error('Error saving to favorites', e);
  }
};

export const getFavorites = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@bouquet_favorites');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Error retrieving favorites', e);
  }
};
