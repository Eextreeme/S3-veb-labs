from config import db

class Cars(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    CarModel = db.Column(db.String(255), unique=False, nullable=False)
    Horsepower = db.Column(db.Integer, unique=False, nullable=False)
    MaxSpeed = db.Column(db.Integer, unique=False, nullable=False)

    def to_json(self):
        return {
            "id": self.id,
            "CarModel": self.CarModel,
            "Horsepower": self.Horsepower,
            "MaxSpeed": self.MaxSpeed,
        }
