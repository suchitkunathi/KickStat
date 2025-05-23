from flask import Blueprint, jsonify
from .api_call import get_response

league_bp = Blueprint('leagues', __name__)

@league_bp.route('/')
def getLeagues():
    response = get_response("leagues")

    leagues = [
        {
            "name": item["league"]["name"],
            "logo": item["league"]["logo"]
        }
        for item in response["response"]
    ]

    for league in leagues:
        print(f"{league['name']}: {league['logo']}")

    return jsonify(leagues)