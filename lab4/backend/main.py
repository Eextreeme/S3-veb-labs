from flask import request, jsonify
from config import app, db
from models import Cars

@app.route("/api/cars", methods=['GET'])
def get_Cars():
    cars = Cars.query.all()
    json_Cars = list(map(lambda x: x.to_json(), cars))
    return jsonify(json_Cars)

@app.route("/api/cars", methods=['POST'])
def create_Car():
    json_data = request.get_json()
    print(json_data)
    CarModel = request.json.get("CarModel")
    Horsepower = request.json.get("Horsepower")
    MaxSpeed = request.json.get("MaxSpeed")

    if not CarModel or not Horsepower or not MaxSpeed:
        return jsonify({"message": "Missing parameters"}), 400

    new_Car = Cars(CarModel=CarModel, Horsepower=Horsepower, MaxSpeed=MaxSpeed)
    try:
        db.session.add(new_Car)
        db.session.commit()
    except Exception as e:
      return (
            jsonify({"message": "some shit..."}), 400,
            )

    return jsonify({"message": "New Car created"}), 201

@app.route('/api/cars/<int:Car_id>', methods=['PUT'])
def update_Car(Car_id):
    car = Cars.query.get(Car_id)

    if not car:
        return jsonify({"message": "Car not found"}), 404

    data = request.json
    car.CarModel = data.get("CarModel", car.CarModel)
    car.Horsepower = data.get("Horsepower", car.Horsepower)
    car.MaxSpeed = data.get("MaxSpeed", car.MaxSpeed)

    db.session.commit()

    return jsonify({"message": "Updated Car"}), 200

@app.route("/api/cars/<int:Car_id>", methods=['DELETE'])
def delete_Car(Car_id):
    Car = Cars.query.get(Car_id)

    if not Car:
        return jsonify({"message": "Car not found"}), 404

    db.session.delete(Car)
    db.session.commit()

    return jsonify({"message": "Deleted Car"}), 200

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)