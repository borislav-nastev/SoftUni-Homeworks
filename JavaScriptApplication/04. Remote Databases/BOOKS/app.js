import { getData, createData, deleteData, updateData } from './requester.js';
import {
    createHtmlEl,
    validData,
    toggleButtons,
    clearInputs,
    getInputsValue,
    toggleErrorContainer,
    disabledButtons,
    enableButtons
} from './helpers.js';

const inputElements = {
    title: document.getElementById('title'),
    author: document.getElementById('author'),
    isbn: document.getElementById('isbn')
}

const placeholdersValue = {
    title: 'Title...',
    author: 'Author...',
    isbn: 'Isnb...'
}

const messageDivEl = document.querySelector('.error-messages');
const tbody = document.querySelector('table > tbody');
const form = document.querySelector('form');
const loadBtnEl = document.getElementById('loadBooks');
const submitBtn = form.querySelector('button');

loadBtnEl.addEventListener('click', loadBooks);
submitBtn.addEventListener('click', submitBook);

async function loadBooks() {

    try {

        tbody.innerHTML = '';
        toggleButtons(loadBtnEl);

        const data = await getData();
        
        if (data.length === 0) {
            toggleErrorContainer(messageDivEl, 'Please add book!');
            toggleButtons(loadBtnEl, 'LOAD ALL BOOKS');
            return;
        }

        data.forEach(book => tbody.appendChild(createComponent(book)));
        toggleButtons(loadBtnEl, 'LOAD ALL BOOKS');

    } catch (err) {
        toggleErrorContainer(messageDivEl, err);
        toggleButtons(loadBtnEl, 'LOAD ALL BOOKS');
        console.error(err);
    }
}

async function submitBook(e) {
    e.preventDefault();

    const emptyInput = validData(inputElements, placeholdersValue);
    if (emptyInput) { return }

    const book = getInputsValue(inputElements);

    try {

        toggleButtons(submitBtn);
        const data = await createData(book);
        tbody.appendChild(createComponent(data));
        messageDivEl.style.display = 'none';
        toggleButtons(submitBtn, 'Submit');

    } catch (err) {
        toggleErrorContainer(messageDivEl, err);
        toggleButtons(submitBtn, 'Submit');
        console.error(err);
        return;
    }

    clearInputs(inputElements);
}

function createComponent(book) {

    const editBtn = createHtmlEl('button', 'Edit');
    const deleteBtn = createHtmlEl('button', 'Delete');

    editBtn.addEventListener('click', editBook);
    deleteBtn.addEventListener('click', deleteBook);

    const currentBook = createHtmlEl('tr', [
        createHtmlEl('td', book.title),
        createHtmlEl('td', book.author),
        createHtmlEl('td', book.isbn),
        createHtmlEl('td', [editBtn, deleteBtn])
    ]);

    function editBook() {

        const saveBtn = createHtmlEl('button', 'Save');
        const cancelBtn = createHtmlEl('button', 'Cancel');

        saveBtn.addEventListener('click', saveData);
        cancelBtn.addEventListener('click', cancel);

        const buttonsContainer = createHtmlEl('div', [saveBtn, cancelBtn]);

        inputElements.title.value = book.title;
        inputElements.author.value = book.author;
        inputElements.isbn.value = book.isbn;
        form.replaceChild(buttonsContainer, submitBtn);

        disabledButtons();

        async function saveData(e) {
            e.preventDefault();

            const emptyInput = validData(inputElements, placeholdersValue);
            if (emptyInput) { return }

            const newData = getInputsValue(inputElements);

            try {
                toggleButtons(saveBtn);
                const response = await updateData(book.objectId, newData);
                loadBooks();
                toggleButtons(saveBtn, 'Save');
                form.replaceChild(submitBtn, buttonsContainer);

            } catch (err) {
                toggleErrorContainer(messageDivEl, err);
                toggleButtons(saveBtn, 'Save');
                console.error(err);
            }

            clearInputs(inputElements);
            enableButtons();
        }

        function cancel(e) {
            e.preventDefault();
            clearInputs(inputElements);
            form.replaceChild(submitBtn, buttonsContainer);
            enableButtons();
        }
    }

    async function deleteBook() {

        try {

            toggleButtons(deleteBtn);
            const response = await deleteData(book.objectId);
            currentBook.remove();
            toggleButtons(deleteBtn, 'Delete');

        } catch (err) {
            toggleErrorContainer(messageDivEl, err);
            toggleButtons(deleteBtn, 'Delete');
            console.error(err);
        }
    }

    return currentBook;
}