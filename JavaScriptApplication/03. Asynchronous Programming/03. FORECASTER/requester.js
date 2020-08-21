const baseUrl = 'https://judgetests.firebaseio.com/';

const endpoints = {
    locations: (code) => 'locations.json',
    today: (code) => `forecast/today/${code}.json`,
    upcoming: (code) => `forecast/upcoming/${code}.json`
}

export default async function getData(endpoint, code) {

    try {
        const response = await fetch(baseUrl + endpoints[endpoint](code));
        if (response.status >= 400) { throw Error(`${response.status}: ${response.statusText}`); }
        return await response.json();

    } catch (err) {
        alert(err);
        console.error(err);
    }
}