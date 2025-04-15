import axios from 'axios';

const API_BASE_URL = 'https://backend-multidownload.onrender.com'; // ose URL e backend-it tënd

export const fetchVideoData = async (url, format) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/download/youtube`, {
      url,
      format,
    });
    return response.data;
  } catch (error) {
    console.error('Gabim gjatë fetchVideoData:', error);
    throw error;
  }
};
