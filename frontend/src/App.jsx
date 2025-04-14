// src/App.js

import React from "react";
import YouTubeDownload from "./pages/YouTubeDownload";
import TikTokDownload from "./pages/TikTokDownload";
import InstagramDownload from "./pages/InstagramDownload";
import XDownload from "./pages/XDownload";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Multi Downloader</h1>
      <div className="space-y-8">
        <YouTubeDownload />
        <TikTokDownload />
        <InstagramDownload />
        <XDownload />
      </div>
    </div>
  );
}

export default App;
