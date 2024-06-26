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

const saveBouquet = async (bouquet) => {
  const timestamp = new Date().toISOString(); // Get current timestamp
  const historyData = await getData('history') || [];
  historyData.push({ date: timestamp, bouquet });
  await storeData('history', historyData);
};

const getFavorites = async () => {
  return await getData('favorites');
};

const getHistory = async () => {
  return await getData('history');
};

export { saveFavorite, saveBouquet, getFavorites, getHistory };
