import {getAllCars, postCar, deleteCar, updateCar} from "./api.js";

let Cars = [];

const openModalCreate = document.getElementById("open-modal-create-button");
const createCarForm = document.getElementById('CarCreateForm'); 
const closeModalButton = document.querySelector('.btn-close'); 
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const isSortByPower = document.getElementById('sort-by-power');
const exceptionModalElement = document.getElementById('exceptionModal');
const exceptionMessage = document.getElementById('exceptionMessage');

// Cars fetching - НОВЕ
const refetchAllCars = async () => {
    const allCars = await getAllCars();

    Cars = allCars;

    drawList(Cars)
}

// Sorting Cars by power (watts) ГОТОВО
isSortByPower?.addEventListener('click', () => {
    if (isSortByPower.checked) {
        const sortedCars = Cars.slice(0).sort((a, b) => b.Horsepower - a.Horsepower);
        drawList(sortedCars);
    } else {
        drawList(Cars);
    }
});


const openExceptionModal = (message) => {
    exceptionMessage.textContent = message;
    const exceptionModal = new bootstrap.Modal(exceptionModalElement);
    exceptionModal.show();
};

openModalCreate?.addEventListener('click', () => {
    const createModal = new bootstrap.Modal(document.getElementById('create-modal'));
    createModal.show();
});

closeModalButton?.addEventListener('click', () => {
    const createModal = bootstrap.Modal.getInstance(document.getElementById('create-modal'));
    createModal.hide();
});


searchButton?.addEventListener('click', () => {

    const searchValue = searchInput.value;
    const filteredCars = Cars.filter((Car) =>
        Car.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    drawList(filteredCars);
});

createCarForm?.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(createCarForm);
    const title = formData.get('CarModel');
    const power = parseFloat(formData.get('Horsepower'));
    const rotationsPerMinute = parseFloat(formData.get('MaxSpeed'));
    const newCar = { CarModel: title, Horsepower: power, MaxSpeed: rotationsPerMinute };

    if (validateInput(newCar)) {
            await postCar(newCar).then(refetchAllCars); // Виклик postCar для відправки на сервеh
            createCarForm.reset();      // Скидаємо форму
            const createModal = bootstrap.Modal.getInstance(document.getElementById('create-modal'));
            createModal.hide();
    }
});

const validateInput = (Car) => {
    if (!Car.CarModel) {
        openExceptionModal("Name is required");
        return false;
    }
    if (!Car.Horsepower || Car.Horsepower <= 0) {
        openExceptionModal("Power (Watts) is required and must be greater than 0");
        return false;
    }
    if (!Car.MaxSpeed || Car.MaxSpeed <= 0) {
        openExceptionModal("RPM is required and must be greater than 0");
        return false;
    }

    return true;
};

const removeCar = async (index) => {
    const CarToDelete = Cars[index];
    Cars.splice(index, 1);
    await deleteCar(CarToDelete.id);
    drawList(Cars);
};

// Edit - ЗМІНЕНО
const editCar = async (index) => {
    const CarToUpdate = Cars[index];
    const form = document.getElementById('CarEditForm');
    form['CarModel'].value = CarToUpdate.CarModel;
    form['Horsepower'].value = CarToUpdate.Horsepower;
    form['MaxSpeed'].value = CarToUpdate.MaxSpeed;

    const editModal = new bootstrap.Modal(document.getElementById('edit-modal'));
    editModal.show();

    const submitEditForm = document.getElementById("submit-edit-form");

    submitEditForm.replaceWith(submitEditForm.cloneNode(true));
    const newSubmitEditForm = document.getElementById("submit-edit-form");

    newSubmitEditForm.addEventListener('click', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const updatedName = formData.get('CarModel');
        const updatedPower = parseFloat(formData.get('Horsepower'));
        const updatedRPM = parseFloat(formData.get('MaxSpeed'));
        if (validateInput({
            CarModel: updatedName,
            Horsepower: updatedPower,
            MaxSpeed: updatedRPM, })) {
            Cars[index] = {
                ...CarToUpdate,
                CarModel: updatedName,
                Horsepower: updatedPower,
                MaxSpeed: updatedRPM,
            };

            await updateCar(Cars[index].id, Cars[index]).then(refetchAllCars);

            editModal.hide();
        }
    });
};

// Відобрадення
const drawList = (CarList) => {
    const totalCars = document.getElementById('total-Cars');
    totalCars.textContent = CarList.length.toString();
    
    const mainPageShow = document.getElementById("main-page");
    mainPageShow.innerHTML = '';
    CarList.forEach((el, idx) => {
        const card = document.createElement('div');
        card.className = "col-md-4";
        card.innerHTML = `
            <div class="card bg-secondary text-white shadow-sm h-100">
                <div class="card-body">
                    <h5 class="card-title">${el.CarModel}</h5>
                    <p class="card-text">Horsepower: ${el.Horsepower} Watts</p>
                    <p class="card-text">Max Speed: ${el.MaxSpeed}</p>
                </div>
                <div class="card-footer d-flex justify-content-between">
                    <button class="btn btn-warning" id="edit-${idx}">Edit</button>
                    <button class="btn btn-danger" id="remove-${idx}">Remove</button>
                </div>
            </div>
        `;

        mainPageShow.appendChild(card);

        document.getElementById(`edit-${idx}`).addEventListener('click', () => editCar(idx));
        document.getElementById(`remove-${idx}`).addEventListener('click', () => removeCar(idx));
    });
};

drawList(Cars);

getAllCars().then(console.log)
refetchAllCars();
