const baseUrl = 'https://fisher-game.firebaseio.com/catches.json';

async function getData() {
    const response = await fetch(baseUrl);
    return await response.json();
}

async function createData(data) {
    const response = await fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}

async function deleteData(id) {
    const deleteUrl = baseUrl.replace('.json', `/${id}.json`);
    const response = await fetch(deleteUrl, { method: 'DELETE' });
    const data = await response.json();
    return data;
}

async function updateData(id, data) {

    const updateUrl = baseUrl.replace('.json', `/${id}.json`);

    const response = await fetch(updateUrl, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}

export {
    getData,
    createData,
    deleteData,
    updateData
}