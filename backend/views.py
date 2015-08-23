# app.py
import os

from flask import Flask, jsonify, request, abort

from flask_jwt import JWT, jwt_required, current_user, generate_token

from models.shared import db
from models.user import User as User

app = Flask(__name__)

app.debug = True
app.config['SECRET_KEY'] = os.environ['SECRET_KEY']
app.config['SQLALCHEMY_DATABASE_URI']= os.environ['SQLALCHEMY_DATABASE_URI']

db.init_app(app)
with app.app_context():
    # Extensions like Flask-SQLAlchemy now know what the "current" app
    # is while within this block. Therefore, you can now run........
    db.create_all()

jwt = JWT(app)


@jwt.authentication_handler
def authenticate(username, password):
    requesting_user = User.query.filter_by(email=username.lower()).first()
    if requesting_user.verify_password(password):
        return requesting_user


@jwt.user_handler
def load_user(payload):
    if payload['user_id']:
        return User.query.get(payload['user_id'])


@app.route('/user')
@jwt_required()
def get_user():
    return jsonify({'email': current_user.email.lower(), 'name': current_user.name })


@app.route('/user', methods=['POST'])
def create_user():
    try:
        if request.json.get('username') is None or request.json.get('password') is None:
            abort(400) # Missing required arguments
        if User.query.filter_by(username=request['username']).first() is not None:
            abort(400) # User already exists

        user = User(name=request.json['username'], email=request.json['email'].lower(), password=request.json['password'])
        db.session.add(user)
        db.session.commit()
        return jsonify({'token': generate_token(authenticate("a", "a"))}), 201
    except Exception as e:
        return str(e)






if __name__ == '__main__':
    app.run()
