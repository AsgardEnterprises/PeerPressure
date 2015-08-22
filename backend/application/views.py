# app.py
from flask import Flask
from flask_jwt import JWT, jwt_required
from flask_sqlalchemy import SQLAlchemy
from application.models.shared import db
from application.models.user import User as User
from application.services.crypto import hash_password

import os


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

class Useroops(object):
    def __init__(self, **kwargs):
        for k, v in kwargs.items():
            setattr(self, k, v)

@jwt.authentication_handler
def authenticate(username, password):
    hashed_password = hash_password(password)
    requesting_user = User.query.filter_by(email=username.lower()).first()
    if requesting_user.password == hashed_password:
        return requesting_user

@jwt.user_handler
def load_user(payload):
    if payload['user_id']:
        return User.query.get(payload['user_id'])





@app.route('/protected')
@jwt_required()
def protected():
    return 'Success!'

@app.route('/getdb/<email>')
def getdb(email):
    u = User('jonny', email, 'mypassword')
    db.session.add(u)
    db.session.commit()
    return 'Success!'




if __name__ == '__main__':
    app.run()