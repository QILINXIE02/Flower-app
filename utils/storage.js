import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveBouquet = async (bouquet) => {
  try {
    // Example: Saving bouquet to AsyncStorage
    await AsyncStorage.setItem('bouquet', JSON.stringify(bouquet));
  } catch (error) {
    console.error('Error saving bouquet:', error);
  }
};

export const getFavorites = async () => {
  try {
    // Example: Retrieving favorites from AsyncStorage
    const favorites = await AsyncStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Error retrieving favorites:', error);
    return [];
  }
};

export const getHistory = async () => {
  try {
    // Example: Retrieving history from AsyncStorage
    const history = await AsyncStorage.getItem('history');
    return history ? JSON.parse(history) : [];
  } catch (error) {
    console.error('Error retrieving history:', error);
    return [];
  }
};
