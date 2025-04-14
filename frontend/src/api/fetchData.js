// /src/components/VideoDownload.jsx

import React, { useState } from 'react';
import { fetchVideoData } from '../api/fetchData';

const VideoDownload = () => {
  const [url, setUrl] = useState('');
  const [format, setFormat] = useState('mp4');
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDownload = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchVideoData(url, format);
      setVideoData(data);
    } catch (err) {
      setError('Error downloading video');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter video URL"
      />
      <select onChange={(e) => setFormat(e.target.value)} value={format}>
        <option value="mp4">MP4</option>
        <option value="mp3">MP3</option>
      </select>
      <button onClick={handleDownload} disabled={loading}>
        {loading ? 'Downloading...' : 'Download'}
      </button>

      {error && <p>{error}</p>}
      {videoData && <p>Video ready to download: {videoData.downloadLink}</p>}
    </div>
  );
};

export default VideoDownload;
