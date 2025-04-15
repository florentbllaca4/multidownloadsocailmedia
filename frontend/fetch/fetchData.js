// src/fetch/fetchData.js
import axios from 'axios';

// YouTube download
export const downloadYouTube = async (url) => {
  try {
    const response = await axios.post('/download/youtube', { url });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// TikTok download
export const downloadTikTok = async (url) => {
  try {
    const response = await axios.post('/download/tiktok', { url });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Instagram download
export const downloadInstagram = async (url) => {
  try {
    const response = await axios.post('/download/instagram', { url });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// X (Twitter) download
export const downloadX = async (url) => {
  try {
    const response = await axios.post('/download/x', { url });
    return response.data;
  } catch (error) {
    throw error;
  }
};
