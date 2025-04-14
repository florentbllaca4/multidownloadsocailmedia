from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Lejon të gjitha kërkesat nga frontend-i

@app.route("/api/download", methods=["GET"])
def download_video():
    # Simuloni një përgjigje që frontend mund ta përdorë
    return jsonify({"message": "Video download started!"})

if __name__ == "__main__":
    app.run(debug=True)
