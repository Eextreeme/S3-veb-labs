import { postCars } from "./api";

let cars = JSON.parse(localStorage.getItem('cars')) || [];
const submitButton = document.getElementById('add-product-form-button');

submitButton.addEventListener('click', (e) => {


    const carName = document.getElementById('Car-naming-id').value;
    const carHp = document.getElementById('Car-HP-id').value;
    const carMaxSpeed = document.getElementById('Car-Max-speed-id').value;
    if ( !carName || isNaN(carHp) || isNaN(carMaxSpeed) ) {
        alert("Будь ласка, заповніть всі поля правильно.");
        return;
    }

    const newCar = {
        id: cars.length ? cars[cars.length - 1].id + 1 : 0, 
        model: carName,
        hoursepower: carHp,
        max_speed: carMaxSpeed,
    };

    console.log(newCar);

    addProductToArray(newCar);

    console.log(cars);

    document.getElementById('add-product-form').reset();
    window.location.href = 'index.html';
})

const addProductToArray = async (newProduct) => {
    cars.push(newProduct);
    localStorage.setItem('cars', JSON.stringify(cars));
     await postCars(newChainsaw).then(refetchAllCars);
}
