import { getData, createData } from './requester.js';
import createTableRow from './helpers.js';
import students from './data.js';

const tbody = document.querySelector('#results > tbody');

(async function loadStudents() {

    let data = await getData();

    if (data.length === 0) {
        const newData = await createData(students);
        data = await getData();
    }

    const sortedData = data.sort((a, b) => a.id - b.id);
    sortedData.forEach(student => tbody.appendChild(createTableRow(student)));
})();
