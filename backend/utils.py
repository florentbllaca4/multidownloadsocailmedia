import os
from uuid import uuid4
import zipfile
import shutil

# Folderi ku do të ruhet videoja e shkarkuar
DOWNLOAD_DIR = os.path.join("backend", "downloads")
os.makedirs(DOWNLOAD_DIR, exist_ok=True)

def generate_unique_filename(extension="mp4"):
    """Krijon një emër unik për skedarin e shkarkuar."""
    return f"{uuid4().hex}.{extension}"

def clean_up_files(files):
    """Pastron skedarët që janë shkarkuar dhe që janë të panevojshëm pas përdorimit."""
    try:
        for file in files:
            if os.path.exists(file):
                os.remove(file)
    except Exception as e:
        print(f"Gabim gjatë pastrimit të skedarëve: {str(e)}")

def create_zip_from_files(files, zip_name="downloads.zip"):
    """Krijon një zip nga një listë skedarësh dhe e ruan në DOWNLOAD_DIR."""
    zip_path = os.path.join(DOWNLOAD_DIR, zip_name)
    try:
        with zipfile.ZipFile(zip_path, "w") as zipf:
            for file in files:
                zipf.write(file, os.path.basename(file))
        return zip_path
    except Exception as e:
        print(f"Gabim gjatë krijimit të zip-it: {str(e)}")
        return None

def move_file_to_download_dir(file_path):
    """Lëviz skedarin nga ndonjë folder tjetër në DOWNLOAD_DIR."""
    try:
        if not os.path.exists(DOWNLOAD_DIR):
            os.makedirs(DOWNLOAD_DIR)
        shutil.move(file_path, DOWNLOAD_DIR)
    except Exception as e:
        print(f"Gabim gjatë lëvizjes së skedarit: {str(e)}")
        return None

def get_video_extension(url):
    """Kthen mundësitë e formateve për një URL të caktuar, mund të përdoret për të përcaktuar se cili format është i mundur."""
    # Ky është një shembull i thjeshtë, mund të shtohet logjikë e avancuar
    if "youtube" in url:
        return "mp4"  # Thjesht shembull për YouTube
    elif "tiktok" in url:
        return "mp4"  # Për TikTok mund të përdorim mp4 gjithashtu
    elif "instagram" in url:
        return "mp4"  # Po ashtu për Instagram
    else:
        return "mp4"  # Përdor mp4 si format default

