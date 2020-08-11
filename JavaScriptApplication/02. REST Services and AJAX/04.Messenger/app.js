const url = 'http://localhost:3000/messenger';

const messagesAreaEl = document.getElementById('messages');
const authorEl = document.getElementById('author');
const contentEl = document.getElementById('content');

function createMessage() {

    const author = authorEl.value;
    const content = contentEl.value;

    if (!author || !content) { throw new Error(`Can not create message without author or content!`); }

    const data = {
        author,
        content
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .catch(err => console.log(err))

    authorEl.value = '';
    contentEl.value = '';
}

function refreshMessages() {

    messagesAreaEl.value = '';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            Object.keys(data).forEach(el => {
                messagesAreaEl.value += `${data[el].author}: ${data[el].content}\n`;
            })
        })
        .catch(err => {
            messagesAreaEl.value = 'No messages!';
            console.log(err);
        })
}

function attachEvents() {
    document.getElementById('submit').addEventListener('click', createMessage);
    document.getElementById('refresh').addEventListener('click', refreshMessages);
}

attachEvents();