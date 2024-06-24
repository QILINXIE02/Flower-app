// utils/api.js
import axios from 'axios';

const API_URL = process.env.API_URL;

export const fetchFlowers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching flowers:', error);
    return [];
  }
};


