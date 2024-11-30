from config import db   
class Car(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    Car_model = db.Column(db.String(80), unique=False, nullable=False)
    Horsepower = db.Column(db.Integer, unique=False, nullable=False)
    Max_speed  = db.Column(db.Integer, unique=False, nullable=False)

    def to_json(self):
        return{
            "id": self.id,
            "CarModel": self.Car_model,
            "Horsepower": self.Horsepower,
            "MaxSpeed": self.Max_speed,
        }