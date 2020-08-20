const baseUrl = 'https://blog-apps-c12bf.firebaseio.com/posts';

const selectEl = document.getElementById('posts');
const postTitleEl = document.getElementById('post-title');
const postContentEl = document.getElementById('post-body');
const commentsUl = document.getElementById('post-comments');

async function createOption() {

    try {
        const response = await fetch(baseUrl + '.json');
        const data = await response.json();
       
        Object.keys(data).forEach(key => {
            const currentOption = document.createElement('option');
            currentOption.setAttribute('value', key);
            currentOption.textContent = data[key].title;
            selectEl.appendChild(currentOption);
        });

    } catch (err) {
        console.log(err)
    }
}

async function viewPost() {

    const id = selectEl.value;

    try {

        const response = await fetch(`${baseUrl}/${id}.json`);
        const data = await response.json();
        const { title, body, comments } = data;

        postTitleEl.textContent = title;
        postContentEl.textContent = body;
        commentsUl.innerHTML = '';

        if (comments) {
            Object.entries(comments).forEach(([_, { text }]) => {
                const currentLi = document.createElement('li');
                currentLi.textContent = text;
                commentsUl.appendChild(currentLi);
            });
        }

    } catch (err) {
        console.log(err);
    }

}

function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', createOption);
    document.getElementById('btnViewPost').addEventListener('click', viewPost);
}

attachEvents();