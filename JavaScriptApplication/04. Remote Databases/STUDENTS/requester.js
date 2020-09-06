const appID = '29D059B3-8277-A6F9-FF57-ECBF3728D000';
const restApiKey = '9977FF22-A082-4B83-8100-EB10ABC2DB94';

const baseUrl = `https://api.backendless.com/${appID}/${restApiKey}/data/students`;

async function getData() {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
}

async function createData(students) {

    const url = baseUrl.replace('/students', '/bulk/students');

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(students)
    });
    const data = await response.json();
    return data;
}

export {
    getData,
    createData
}