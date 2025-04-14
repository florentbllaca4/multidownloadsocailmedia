from flask import Flask, request, send_file
from youtube import download_youtube
from social_downloaders.tiktok import download_tiktok
from social_downloaders.instagram import download_instagram
from social_downloaders.x import download_x
import os

app = Flask(__name__)

@app.route("/api/download/youtube", methods=["POST"])
def api_download_youtube():
    urls = request.json.get("urls", [])
    return download_youtube(urls)

@app.route("/api/download/tiktok", methods=["POST"])
def api_download_tiktok():
    urls = request.json.get("urls", [])
    return download_tiktok(urls)

@app.route("/api/download/instagram", methods=["POST"])
def api_download_instagram():
    urls = request.json.get("urls", [])
    return download_instagram(urls)

@app.route("/api/download/x", methods=["POST"])
def api_download_x():
    urls = request.json.get("urls", [])
    return download_x(urls)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
