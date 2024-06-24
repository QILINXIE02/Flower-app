import * as Location from 'expo-location';
import axios from 'axios';

export const getNearbyStores = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    alert('Permission to access location was denied');
    return;
  }

  const location = await Location.getCurrentPositionAsync({});
  const { latitude, longitude } = location.coords;

  const response = await axios.get(`ENDPOINT`, {
    params: {
      location: `${latitude},${longitude}`,
      radius: 1500,
      type: 'florist',
      key: 'API_KEY',
    },
  });

  return response.data.results;
};
