const cars_to_parse = JSON.parse(localStorage.getItem('cars_to_parse')) || [];
const carIdx = JSON.parse(localStorage.getItem('currentCarIdx'));
const submitButton = document.getElementById('add-product-form-button');

const carNameInput = document.getElementById('Car-naming-id');
const carHpInput = document.getElementById('Car-HP-id');
const carMaxSpeedInput = document.getElementById('Car-Max-speed-id');

carNameInput.value = cars_to_parse[carIdx].model;
carHpInput.value = cars_to_parse[carIdx].hoursepower;
carMaxSpeedInput.value = cars_to_parse[carIdx].max_speed;

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const carName = carNameInput.value;
    const carHp = carHpInput.value;
    const carMaxSpeed = carMaxSpeedInput.value;

    if ( !carName || isNaN(carHp) || isNaN(carMaxSpeed) ) {
        alert("Будь ласка, заповніть всі поля правильно.");
        return;
    }

    const newCar = {
        id: carIdx,
        model: carName,
        hoursepower: carHp,
        max_speed: carMaxSpeed,
    };

    console.log(newCar);

    cars_to_parse[carIdx] = {
        ...cars_to_parse[carIdx],
        model: carName,
        hoursepower: carHp,
        max_speed: carMaxSpeed,
    }
    localStorage.setItem('cars_to_parse', JSON.stringify(cars_to_parse));

    console.log(cars_to_parse);

    document.getElementById('add-product-form').reset();
    window.location.href = 'index.html';
})
