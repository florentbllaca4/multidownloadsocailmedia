// src/components/InstagramDownload.js

import React, { useState } from "react";
import axios from "axios";

const InstagramDownload = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDownload = async () => {
    if (!url) {
      setError("Ju lutem vendosni një URL.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/download/instagram", { urls: [url] }, { responseType: 'blob' });
      const blob = new Blob([response.data], { type: "application/zip" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "instagram_downloads.zip";
      link.click();
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Gabim gjatë shkarkimit.");
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-lg mt-4">
      <h2 className="text-xl font-semibold mb-4">Shkarkoni nga Instagram</h2>
      <input
        type="text"
        placeholder="Vendosni URL-në e Instagram"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <button
        onClick={handleDownload}
        className={`w-full p-2 bg-blue-600 text-white rounded mt-2 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={loading}
      >
        {loading ? "Duke shkarkuar..." : "Shkarkoni"}
      </button>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default InstagramDownload;
