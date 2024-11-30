import {getAllCars} from "./api.js"
const showdict = [];
let currentList = [];

let IS_FABIA_VISIBLE = false;

const data = [
    { "id": 0, "model": "BMW M5", "hoursepower": 617, "max_speed": 305 },
    { "id": 1, "model": "BMW M3", "hoursepower": 473, "max_speed": 290 },
    { "id": 2, "model": "BMW M8", "hoursepower": 617, "max_speed": 305 },
    { "id": 3, "model": "BMW X5 M", "hoursepower": 600, "max_speed": 290 },
    { "id": 4, "model": "BMW i8", "hoursepower": 369, "max_speed": 250 },
    { "id": 5, "model": "BMW Z4 M40i", "hoursepower": 382, "max_speed": 250 },
    { "id": 6, "model": "BMW M2 Competition", "hoursepower": 405, "max_speed": 280 },
    { "id": 7, "model": "BMW 330i", "hoursepower": 255, "max_speed": 250 },
    { "id": 8, "model": "BMW X7 M50i", "hoursepower": 523, "max_speed": 250 },
    { "id": 9, "model": "BMW 750i", "hoursepower": 523, "max_speed": 250 },
    { "id": 10, "model": "Ferrari 488", "hoursepower": 661, "max_speed": 330 },
    { "id": 11, "model": "Lamborghini Aventador", "hoursepower": 730, "max_speed": 350 },
    { "id": 12, "model": "Porsche 911", "hoursepower": 443, "max_speed": 308 },
    { "id": 13, "model": "Tesla Model S", "hoursepower": 1020, "max_speed": 322 },
    { "id": 14, "model": "Bugatti Chiron", "hoursepower": 1500, "max_speed": 420 },
    { "id": 15, "model": "Mercedes-Benz AMG GT", "hoursepower": 577, "max_speed": 318 },
    { "id": 16, "model": "Nissan GT-R", "hoursepower": 565, "max_speed": 315 },
    { "id": 17, "model": "Jaguar F-Type", "hoursepower": 575, "max_speed": 300 },
    { "id": 18, "model": "Chevrolet Corvette", "hoursepower": 495, "max_speed": 312 },
    { "id": 19, "model": "Dodge Challenger SRT Hellcat", "hoursepower": 717, "max_speed": 315 },
    { "id": 20, "model": "Subaru WRX STI", "hoursepower": 310, "max_speed": 250 },
    { "id": 21, "model": "Toyota Supra", "hoursepower": 335, "max_speed": 250 },
    { "id": 22, "model": "Maserati GranTurismo", "hoursepower": 454, "max_speed": 298 },
    { "id": 23, "model": "Aston Martin Vantage", "hoursepower": 503, "max_speed": 314 },
];

if (!localStorage.getItem('cars')) {
    localStorage.setItem('cars', JSON.stringify(data));
}

let cars = JSON.parse(localStorage.getItem('cars'));

cars.forEach((car) => {
    showdict.push(car);
});

// Chainsaws fetching - НОВЕ
const refetchAllCars = async () => {
    const allCars = await getAllCars();

    cars = allCars;

    drawList(cars)
}

function drawList(list) {
    const showroom = document.getElementById('showroom-of-car');

    showroom.innerHTML = '';
    list.forEach((el, idx) => {
        showroom.innerHTML += `
        <div id = "showroom" class = "container">
            <div class = "cards" id = "showroom-inside-${idx}">
                <p class = text-car>${el.model}</p>
                <ul>
                    <li class="">hourse_power: ${el.hoursepower}</li>
                    <li class="">max-speed: ${el.max_speed}</li>
                </ul>
                <button onclick="deleteCar(${el.id})">Delete</button>
                <button onclick="editCar(${el.id})">Edit</button>
            </div>
        </div>
        `
    })
}

const clearSearch = () => { drawList(showdict); }

function search() {
    var input = document.getElementById('search');
    var lowerInputValue = input.value.toLowerCase().trim();
    currentList = showdict.filter(car => car.model.toLowerCase().includes(lowerInputValue));
    drawList(currentList);
}

function BMWSeach() {
    var lowerValue = 'mercedes';
    currentList = showdict.filter(car => car.model.toLowerCase().includes(lowerValue));
    drawList(currentList);
    return
}

function sortByHorsepower(order = 'asc') {
    const listToSort = currentList.length > 0 ? currentList : showdict;
    const sortedList = [...listToSort].sort((a, b) => {
        if (order === 'asc') {
            return a.hoursepower - b.hoursepower;
        }
        else {
            return b.hoursepower - a.hoursepower;
        }
    });

    drawList(sortedList);
}

function sort() {
    const sortOrder = document.getElementById('sortOrder').value;
    sortByHorsepower(sortOrder);
}

function avgHoursePower() {
    const listForAvg = currentList.length > 0 ? currentList : showdict;
    let sum = 0
    for (let i = 0; i < listForAvg.length; i++) {
        sum = sum + listForAvg[i].hoursepower
    }
    alert(`Середнє значення кінських сил ${sum / listForAvg.length} `)
}

function deleteCar(id) {
    const carToDelete = showdict.filter((el) => el.id == id)
    const carIdx = showdict.indexOf(...carToDelete);

    showdict.splice(carIdx, 1);

    localStorage.setItem('cars', JSON.stringify(showdict));
    drawList(showdict);
}

function editCar(id) {
    const carToDelete = showdict.filter((el) => el.id == id)
    const carIdx = showdict.indexOf(...carToDelete);

    console.log(carIdx)

    localStorage.setItem('currentCarIdx', carIdx)

    window.location.href = 'edit.html'
}

drawList(showdict);
