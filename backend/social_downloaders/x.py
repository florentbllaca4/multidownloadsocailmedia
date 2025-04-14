import requests
from flask import send_file
import os
from uuid import uuid4
import zipfile

DOWNLOAD_DIR = os.path.join("backend", "downloads")
os.makedirs(DOWNLOAD_DIR, exist_ok=True)

def download_x(urls):
    files = []

    for url in urls:
        try:
            api_url = "https://twdown.net/download.php"
            headers = {
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": "Mozilla/5.0"
            }
            data = {"URL": url}

            session = requests.Session()
            response = session.post(api_url, headers=headers, data=data)

            if "href=" not in response.text:
                continue

            import re
            match = re.search(r'href="(https://[^"]+\.mp4)"', response.text)
            if not match:
                continue

            video_url = match.group(1)
            video_data = session.get(video_url)

            filename = f"x_{uuid4().hex}.mp4"
            filepath = os.path.join(DOWNLOAD_DIR, filename)

            with open(filepath, "wb") as f:
                f.write(video_data.content)

            files.append(filepath)

        except Exception as e:
            print("Gabim gjatë shkarkimit nga X:", str(e))

    if not files:
        return {"error": "Asnjë video nuk u shkarkua."}, 400

    if len(files) == 1:
        return send_file(files[0], as_attachment=True)

    zip_path = os.path.join(DOWNLOAD_DIR, "x_downloads.zip")
    with zipfile.ZipFile(zip_path, "w") as zipf:
        for file in files:
            zipf.write(file, os.path.basename(file))
    return send_file(zip_path, as_attachment=True)
