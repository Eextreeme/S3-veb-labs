class Car {
    constructor(model, hoursepower, max_speed) {
        this.model = model;
        this.hoursepower = hoursepower;
        this.max_speed = max_speed;
    }
}

const showdict = [];
let currentList = [];

const data = [
    { "model": "BMW M5", "hoursepower": 617, "max_speed": 305 },
    { "model": "BMW M3", "hoursepower": 473, "max_speed": 290 },
    { "model": "BMW M8", "hoursepower": 617, "max_speed": 305 },
    { "model": "BMW X5 M", "hoursepower": 600, "max_speed": 290 },
    { "model": "BMW i8", "hoursepower": 369, "max_speed": 250 },
    { "model": "BMW Z4 M40i", "hoursepower": 382, "max_speed": 250 },
    { "model": "BMW M2 Competition", "hoursepower": 405, "max_speed": 280 },
    { "model": "BMW 330i", "hoursepower": 255, "max_speed": 250 },
    { "model": "BMW X7 M50i", "hoursepower": 523, "max_speed": 250 },
    { "model": "BMW 750i", "hoursepower": 523, "max_speed": 250 },
    { "model": "Ferrari 488", "hoursepower": 661, "max_speed": 330 },
    { "model": "Lamborghini Aventador", "hoursepower": 730, "max_speed": 350 },
    { "model": "Porsche 911", "hoursepower": 443, "max_speed": 308 },
    { "model": "Tesla Model S", "hoursepower": 1020, "max_speed": 322 },
    { "model": "Bugatti Chiron", "hoursepower": 1500, "max_speed": 420 },
    { "model": "Mercedes-Benz AMG GT", "hoursepower": 577, "max_speed": 318 },
    { "model": "Nissan GT-R", "hoursepower": 565, "max_speed": 315 },
    { "model": "Jaguar F-Type", "hoursepower": 575, "max_speed": 300 },
    { "model": "Chevrolet Corvette", "hoursepower": 495, "max_speed": 312 },
    { "model": "Dodge Challenger SRT Hellcat", "hoursepower": 717, "max_speed": 315 },
    { "model": "Subaru WRX STI", "hoursepower": 310, "max_speed": 250 },
    { "model": "Toyota Supra", "hoursepower": 335, "max_speed": 250 },
    { "model": "Maserati GranTurismo", "hoursepower": 454, "max_speed": 298 },
    { "model": "Aston Martin Vantage", "hoursepower": 503, "max_speed": 314 },
];

data.forEach((car) => {
    showdict.push(new Car(car.model, car.hoursepower, car.max_speed));
});

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
    var lowerValue = 'bmw';
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



drawList(showdict);

