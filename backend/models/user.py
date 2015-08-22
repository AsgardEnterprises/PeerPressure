from services.crypto import hash_password
from models.shared import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True)
    name = db.Column(db.String(80), unique=True)
    password = db.Column(db.String(200), unique=False)

    def __init__(self, name, email, password):
        self.email = email.lower()
        self.name = name.lower()
        self.password = hash_password(password)

    def __repr__(self):
        return "<User {0} ({1})>".format(self.name, self.email)

