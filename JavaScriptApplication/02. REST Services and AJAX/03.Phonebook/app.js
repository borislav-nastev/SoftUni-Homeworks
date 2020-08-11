function attachEvents() {

    const url = 'http://localhost:3000/phonebook';

    const phoneBookEl = document.getElementById('phonebook');
    const personNameEl = document.getElementById('person');
    const phoneEl = document.getElementById('phone');

    document.getElementById('btnCreate').addEventListener('click', addContact);
    document.getElementById('btnLoad').addEventListener('click', loadContacts);

    function createContact(data) {

        return Object.keys(data).forEach(id => {
            const currentLi = document.createElement('li');
            currentLi.textContent = `${data[id].name}: ${data[id].phoneNumber}`;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => deleteContact(id, currentLi));

            currentLi.appendChild(deleteBtn);
            phoneBookEl.appendChild(currentLi);
        })
    }

    function addContact() {

        const name = personNameEl.value;
        const phoneNumber = phoneEl.value;

        if (!name || !phoneNumber) { throw new Error('Please write name and phone number!'); }

        const data = {
            name,
            phoneNumber
        };

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => createContact(data))
            .catch(err => console.log(err))

        personNameEl.value = '';
        phoneEl.value = '';
    }

    function loadContacts() {

        phoneBookEl.innerHTML = '';

        fetch(url)
            .then(response => response.json())
            .then(data => createContact(data))
            .catch(err => console.log(err))
    }

    function deleteContact(id, currentLi) {

        const deleteUrl = url + '/' + id;

        fetch(deleteUrl, { method: 'DELETE' })
            .then(response => {
                if (response.status === 200) {
                    currentLi.remove();
                    return;
                } else {
                    throw Error('Invalid operation!');
                }
            })
            .catch(err => console.log(err))
    }

}

attachEvents();