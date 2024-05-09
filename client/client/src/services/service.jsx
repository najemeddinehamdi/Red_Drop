import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Replace this URL with your backend API URL

const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/signup/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user information:', error);
    return null;
  }
};

export { getUserById };