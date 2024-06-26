import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error storing data:', error);
  }
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error retrieving data:', error);
  }
};

const saveFavorite = async (flower) => {
  const favoritesData = await getData('favorites') || [];
  favoritesData.push(flower);
  await storeData('favorites', favoritesData);
};

const getFavorites = async () => {
  return await getData('favorites');
};

export { saveFavorite, getFavorites };
