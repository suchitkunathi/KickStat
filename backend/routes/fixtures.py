from flask import Blueprint
from .api_call import get_response

fixture_bp = Blueprint("fixtures", __name__)

def getFixtures():
    get_response("fixtures")