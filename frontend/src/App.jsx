// src/App.js

import React from "react";
import YouTubeDownload from "./components/YouTubeDownload";
import TikTokDownload from "./components/TikTokDownload";
import InstagramDownload from "./components/InstagramDownload";
import XDownload from "./components/XDownload";

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
