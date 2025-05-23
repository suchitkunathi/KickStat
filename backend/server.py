from flask import Flask, jsonify, request
import requests
from flask_cors import CORS

from routes.fixtures import fixture_bp
from routes.leagues import league_bp
from routes.players import player_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(fixture_bp, url_prefix="/api/fixtures")
app.register_blueprint(league_bp, url_prefix="/api/leagues")
app.register_blueprint(player_bp, url_prefix="/api/players")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)