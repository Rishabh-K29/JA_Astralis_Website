from flask import Flask
import subprocess

flask_server = Flask(__name__)

@flask_server.route("/")
def buttonClicked():
    subprocess.call(["python", "script.py"])
    return "Button clicked!"

if __name__ == "__main__":
    flask_server.run()
