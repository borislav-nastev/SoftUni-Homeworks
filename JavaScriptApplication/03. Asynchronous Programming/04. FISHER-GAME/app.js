import { getData, createData, deleteData, updateData } from './requester.js';
import createHtmlEl from './helpers.js';

const inputsEl = {
    angler: document.querySelector('#addForm .angler'),
    weight: document.querySelector('#addForm .weight'),
    species: document.querySelector('#addForm .species'),
    location: document.querySelector('#addForm .location'),
    bait: document.querySelector('#addForm .bait'),
    captureTime: document.querySelector('#addForm .captureTime'),
}

const catchContainer = document.getElementById('main');

const loadBtn = document.querySelector('.load');
const addBtn = document.querySelector('.add');

loadBtn.addEventListener('click', loadData);
addBtn.addEventListener('click', addData);

async function loadData() {

    try {
        loadBtn.textContent = 'Loading...';
        loadBtn.disabled = true;
        const data = await getData();

        if (!data) {
            changeHtmlElement(catchContainer, '<legend>Please create catches</legend>')
            return;
        };

        changeHtmlElement(catchContainer, '<legend>Catches</legend>');
        Object.entries(data).forEach(([key, value]) => {
            catchContainer.appendChild(createCatch(key, value));
        });

    } catch (err) {
        changeHtmlElement(catchContainer, `<div>${err}</div>`);
        console.error(err);

    } finally {
        loadBtn.textContent = 'Load';
        loadBtn.disabled = false;
    }
}

async function addData() {

    Object.keys(inputsEl).forEach(el => {
        if (!inputsEl[el].value) {
            inputsEl[el].placeholder = `${el} can not be empty!`;
            throw new Error(`${el} can not be empty!`);
        }
        inputsEl[el].placeholder = '';
    });

    const data = {
        angler: inputsEl.angler.value,
        weight: inputsEl.weight.value,
        species: inputsEl.species.value,
        location: inputsEl.location.value,
        bait: inputsEl.bait.value,
        captureTime: inputsEl.captureTime.value
    }

    try {
        addBtn.textContent = 'Loading...';
        addBtn.disabled = true;
        const response = await createData(data);
        Object.keys(inputsEl).forEach(el => inputsEl[el].value = '');

    } catch (err) {
        changeHtmlElement(catchContainer, `<div>${err}</div>`);
        console.error(err);

    } finally {
        addBtn.textContent = 'ADD';
        addBtn.disabled = false;
    }
}

function createCatch(key, data) {

    const updateBtn = createHtmlEl('button', 'Update', { className: 'update', value: key });
    const deleteBtn = createHtmlEl('button', 'Delete', { className: 'delete', value: key });

    const component = createHtmlEl('div', [
        createHtmlEl('div', [
            createHtmlEl('label', 'Angler'),
            createHtmlEl('input', '', { type: 'text', className: 'angler', value: data.angler }),
            document.createElement('hr'),
            createHtmlEl('label', 'Weight'),
            createHtmlEl('input', '', { type: 'number', className: 'weight', value: data.weight }),
            document.createElement('hr'),
            createHtmlEl('label', 'Species'),
            createHtmlEl('input', '', { type: 'text', className: 'species', value: data.species }),
            document.createElement('hr'),
            createHtmlEl('label', 'Location'),
            createHtmlEl('input', '', { type: 'text', className: 'location', value: data.location }),
            document.createElement('hr'),
            createHtmlEl('label', 'Bait'),
            createHtmlEl('input', '', { type: 'text', className: 'bait', value: data.bait }),
            document.createElement('hr'),
            createHtmlEl('label', 'Capture Time'),
            createHtmlEl('input', '', { type: 'text', className: 'captureTime', value: data.captureTime }),
            document.createElement('hr'),
            updateBtn,
            deleteBtn
        ], { className: 'catch' })
    ], { id: 'catches' });

    updateBtn.addEventListener('click', updateComponent);
    deleteBtn.addEventListener('click', deleteComponent);

    async function updateComponent(e) {
        const parentEl = e.target.parentElement;

        const newData = {
            angler: parentEl.querySelector('.angler').value,
            weight: parentEl.querySelector('.weight').value,
            species: parentEl.querySelector('.species').value,
            location: parentEl.querySelector('.location').value,
            bait: parentEl.querySelector('.bait').value,
            captureTime: parentEl.querySelector('.captureTime').value,
        }

        const emptyInput = Object.entries(newData).find(([key, value]) => value === '');

        if (emptyInput) {
            parentEl.querySelector(`.${[emptyInput[0]]}`).placeholder = `${emptyInput[0]} can not be empty!`;
            return;
        }

        try {
            updateBtn.textContent = 'Loading...';
            updateBtn.disabled = true;
            const response = await updateData(e.target.value, newData);

        } catch (err) {
            changeHtmlElement(catchContainer, `<div>${err}</div>`);
            console.error(err);

        } finally {
            updateBtn.textContent = 'Update';
            updateBtn.disabled = false;
        }
    }

    async function deleteComponent(e) {

        try {
            deleteBtn.textContent = 'Loading...';
            deleteBtn.disabled = true;
            const data = await deleteData(e.target.value);
            component.remove();

        } catch (err) {
            changeHtmlElement(catchContainer, `<div>${err}</div>`);
            console.error(err);

        } finally {
            deleteBtn.textContent = 'Delete';
            deleteBtn.disabled = false;
        }
    }

    return component;
}

function changeHtmlElement(el, value) {
    el.innerHTML = '';
    return el.innerHTML = value;
}