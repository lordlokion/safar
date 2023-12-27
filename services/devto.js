import axios from 'axios';

const devtoAPI = axios.create({
  baseURL: 'https://dev.to/api/',
});

const getDevtoPosts = async () => {
  try {
    const response = await devtoAPI.get('/articles', {
      params: {
        username: 'lordlokion',
        key: 'Z8QZ1MqDETk4Lph6xXpGVpS6', 
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching Dev.to posts:', error);
    return [];
  }
};

export { getDevtoPosts };
