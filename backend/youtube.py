import yt_dlp as youtube_dl
from flask import send_file
import os
from uuid import uuid4
import zipfile

DOWNLOAD_DIR = os.path.join("backend", "downloads")
os.makedirs(DOWNLOAD_DIR, exist_ok=True)

def download_youtube(urls):
    files = []

    ydl_opts = {
        'format': 'bestvideo+bestaudio/best',
        'outtmpl': os.path.join(DOWNLOAD_DIR, f'%(id)s.%(ext)s'),
        'quiet': True
    }

    for url in urls:
        try:
            with youtube_dl.YoutubeDL(ydl_opts) as ydl:
                info_dict = ydl.extract_info(url, download=True)
                filename = os.path.join(DOWNLOAD_DIR, f"{info_dict['id']}.mp4")
                files.append(filename)
        except Exception as e:
            print(f"Gabim gjatë shkarkimit nga YouTube: {str(e)}")

    if not files:
        return {"error": "Asnjë video nuk u shkarkua."}, 400

    if len(files) == 1:
        return send_file(files[0], as_attachment=True)

    zip_path = os.path.join(DOWNLOAD_DIR, "youtube_downloads.zip")
    with zipfile.ZipFile(zip_path, "w") as zipf:
        for file in files:
            zipf.write(file, os.path.basename(file))
    return send_file(zip_path, as_attachment=True)
