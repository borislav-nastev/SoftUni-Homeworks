const appId = '29D059B3-8277-A6F9-FF57-ECBF3728D000';
const apiKey = '9977FF22-A082-4B83-8100-EB10ABC2DB94';

const host = function (endpoint) {
    return `https://api.backendless.com/${appId}/${apiKey}/${endpoint}`;
}

const endpoints = {
    REGISTER: 'users/register',
    LOGIN: 'users/login',
    LOGOUT: 'users/logout',
    TEAMS: 'data/teams'
}

async function registerUser(username, password) {

    const response = await fetch(host(endpoints.REGISTER), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });
    return response.json();
}

async function loginUser(username, password) {

    const response = await fetch(host(endpoints.LOGIN), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: username,
            password
        })
    });
    return response.json();
}

async function logoutUser() {

    const userToken = localStorage.getItem('userToken');
    await fetch(host(endpoints.LOGOUT), {
        headers: {
            'user-token': userToken
        }
    });
}

async function createTeam(team) {

    const userToken = localStorage.getItem('userToken');
    const response = await fetch(host(endpoints.TEAMS), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'user-token': userToken
        },
        body: JSON.stringify(team)
    });
    return response.json();
}

async function getAllTeams() {

    const userToken = localStorage.getItem('userToken');
    const response = await fetch(host(endpoints.TEAMS), {
        headers: {
            'user-token': userToken
        }
    });
    return response.json();
}

async function getTeam(id) {

    const userToken = localStorage.getItem('userToken');
    const response = await fetch(host(endpoints.TEAMS + `/${id}`), {
        headers: {
            'user-token': userToken
        }
    });
    return response.json();
}

async function editTeam(id, team) {

    const userToken = localStorage.getItem('userToken');
    const response = await fetch(host(endpoints.TEAMS + `/${id}`), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'user-token': userToken
        },
        body: JSON.stringify(team)
    });
    return response.json();
}

export {
    registerUser,
    loginUser,
    logoutUser,
    createTeam,
    getAllTeams,
    getTeam,
    editTeam
}