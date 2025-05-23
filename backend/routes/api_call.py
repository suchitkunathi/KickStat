import os
from dotenv import load_dotenv
from flask import request, jsonify

load_dotenv()

API_BASE_URL = "http://v3.football.api-sports.io"
API_TOKEN = os.getenv("API_TOKEN")

def get_response(endpoint):
    try:
        response = request.get(
            f"{API_BASE_URL}/{endpoint}",
            headers={"x-apisports-key": API_TOKEN}
        )
        # return response.json()
        return jsonify(response.json())
    except Exception as e:
        return jsonify({"error": str(e)}), 500