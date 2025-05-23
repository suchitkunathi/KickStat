from flask import Blueprint
from .api_call import get_response

player_bp = Blueprint("players", __name__)

def getPlayers():
    get_response("players")