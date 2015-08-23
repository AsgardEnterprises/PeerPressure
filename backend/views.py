# app.py
import os

from flask import Flask, jsonify, request, abort

from flask_jwt import JWT, jwt_required, current_user, generate_token
from werkzeug import exceptions as werkzeug_exceptions

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


class InvalidUsage(Exception):
    status_code = 400
    def __init__(self, message, status_code=None, payload=None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        rv = dict(self.payload or ())
        rv['message'] = self.message
        return rv


@app.errorhandler(InvalidUsage)
def customInvalidUsage(error):
    response = jsonify(error.to_dict())
    response.status = 'error.Bad Request'
    response.status_code = error.status_code
    return response

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
    return jsonify({'email': current_user.email, 'name': current_user.name})


@app.route('/user', methods=['POST'])
def create_user():
    try:
        json = request.json
        if json is None:
            raise InvalidUsage('payload is empty or Mime is not JSON')

        username = json['username']
        password = json['password']
        email    = json['email']

        if username in [None, ""] or email in [None, ""] or password in [None, ""]:
            raise InvalidUsage('Empty required arguments', 400)

        if not isinstance(username, basestring) or \
           not isinstance(email,    basestring) or \
           not isinstance(password, basestring):
            raise InvalidUsage('username, email and password must be strings', 400)

        username = username.lower()
        email = email.lower()

        if User.query.filter_by(name=username).first() is not None:
            raise InvalidUsage('User already exists', 400)

        if User.query.filter_by(email=email).first() is not None:
            raise InvalidUsage('Email already exists', 400)

        user = User(name=username, email=email, password=password)
        db.session.add(user)
        db.session.commit()
        return jsonify({'token': generate_token(authenticate(email, password))}), 201

    except KeyError as e:
        raise InvalidUsage('Missing required arguments ({0})'.format(e.message), 400)
    except werkzeug_exceptions.BadRequest as e:
        raise InvalidUsage('payload is not a valid JSON')
    except Exception as e:
        raise InvalidUsage('Something bad happened. Please blame Kadi for this ({0})'.format(e.message), 500)

if __name__ == '__main__':
    app.run()
