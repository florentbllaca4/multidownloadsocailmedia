import requests
from flask import send_file
import os
from uuid import uuid4
import zipfile

DOWNLOAD_DIR = os.path.join("backend", "downloads")
os.makedirs(DOWNLOAD_DIR, exist_ok=True)

def download_instagram(urls):
    files = []

    for url in urls:
        try:
            api = "https://saveig.app/api/ajaxSearch"
            headers = {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "X-Requested-With": "XMLHttpRequest",
            }
            data = f"url={url}"

            r = requests.post(api, headers=headers, data=data)
            info = r.json()

            if 'links' not in info:
                continue

            first_video = next((link for link in info['links'] if 'video' in link['type']), None)
            if not first_video:
                continue

            video_url = first_video['url']
            video_data = requests.get(video_url)
            filename = f"instagram_{uuid4().hex}.mp4"
            filepath = os.path.join(DOWNLOAD_DIR, filename)

            with open(filepath, "wb") as f:
                f.write(video_data.content)

            files.append(filepath)

        except Exception as e:
            print("Gabim gjatë shkarkimit nga Instagram:", str(e))

    if not files:
        return {"error": "Asnjë video nuk u shkarkua."}, 400

    if len(files) == 1:
        return send_file(files[0], as_attachment=True)

    zip_path = os.path.join(DOWNLOAD_DIR, "instagram_downloads.zip")
    with zipfile.ZipFile(zip_path, "w") as zipf:
        for file in files:
            zipf.write(file, os.path.basename(file))
    return send_file(zip_path, as_attachment=True)
