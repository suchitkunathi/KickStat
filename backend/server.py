# server.py
from flask import Flask, jsonify, request
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

API_BASE_URL = "http://v3.football.api-sports.io"
API_TOKEN = "c65b1f9482b9391966f3356c75ee0440"

@app.route('/api/matches', methods=['GET'])
def get_matches():
    try:
        response = requests.get(
            f"{API_BASE_URL}/teams/countries",
        )
        return jsonify(response.json())
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)