const baseUrl = 'https://api.github.com/repos/';

const usernameInput = document.getElementById('username');
const repoInput = document.getElementById('repo');
const commitsUl = document.getElementById('commits');

function makeRequest() {

    const username = usernameInput.value;
    const repo = repoInput.value;

    return fetch(baseUrl + `${username}/${repo}/commits`);
}

function createEl(type, text) {
    const currentEl = document.createElement(type);
    currentEl.textContent = text;
    return currentEl;
}

async function loadCommits() {

    const response = await makeRequest();

    if (response.status >= 400) {
        commitsUl.appendChild(createEl('li', `Error: ${response.status} (${response.statusText})`));
        return;
    }

    const data = await response.json();

    data.forEach(el => {
        commitsUl.appendChild(createEl('li', `${el.commit.author.name}: ${el.commit.message}`));
    });
}
