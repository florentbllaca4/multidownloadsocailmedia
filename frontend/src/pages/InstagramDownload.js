import React, { useState } from 'react';
import { downloadYouTube } from '../fetch/fetchData';

function YouTubeDownload() {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('');

  const handleDownload = async () => {
    try {
      setStatus('Duke shkarkuar...');
      const data = await downloadYouTube(url);
      // bëj redirect ose shfaq mesazh suksesi
      window.open(data.download_url, '_blank');
      setStatus('Shkarkimi u përfundua!');
    } catch (err) {
      setStatus('Gabim gjatë shkarkimit!');
      console.error(err);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Vendos linkun e YouTube"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleDownload}>Shkarko</button>
      <p>{status}</p>
    </div>
  );
}

export default YouTubeDownload;
