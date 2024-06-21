import axios from 'axios';

export const fetchNearbyStores = async (latitude, longitude) => {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1500&type=grocery_or_supermarket&key=API_KEY`
  );
  return response.data.results;
};
