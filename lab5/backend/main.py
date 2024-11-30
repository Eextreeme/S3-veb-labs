from flask import request, jsonify
from config import app, db
from models import Car

@app.route("/api/cars", methods = ["GET"])
def get_cars():
    cars = Car.query.all()
    json_cars = list(map(lambda x: x.to_json(), cars))
    return jsonify(json_cars)

@app.route("/api/cars",methods = ["POST"])
def create_car():
    json_data = request.get_json()
    
    CarModel = request.json.get("CarModel")
    Horsepower = request.json.get("Horsepower")
    MaxSpeed = request.json.get("MaxSpeed")
    if not MaxSpeed or not MaxSpeed or not MaxSpeed:
        return (
            jsonify({"message": "some shit..."}), 400,
            )
        
    new_car = Car(Car_model = CarModel, Horsepower = Horsepower, Max_speed = MaxSpeed)
    try:
        db.session.add(new_car)
        db.session.commit()
    except Exception as e:
        return (
            jsonify({"message":str(e)}), 400,
            ) 
    return jsonify({"message": "Car made"}), 201
@app.route("/api/cars/<int:car_id>", methods = ["PUT"])
def update_car(car_id):
    car = Car.query.get(car_id)
    if not car:
        return jsonify({"message": "Car not found"}), 404
    data = request.json
    car.Car_model = data.get("CarModel", car.Car_model)
    car.Horsepower = data.get("Horsepower", car.Horsepower)
    car.Max_speed = data.get("Horsepower", car.Max_speed)
    db.session.commit()
    return jsonify({"message": "car updated"}), 200
@app.route("/api/cars/<int:car_id>", methods = ["DELETE"])
def delete_car(car_id):
    car = Car.query.get(car_id)
    if not car:
            return jsonify({"message": "Car not found"}), 404
    db.session.delete(car)
    db.session.commit()
    return jsonify({"message": "car deleted"}), 200
if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)