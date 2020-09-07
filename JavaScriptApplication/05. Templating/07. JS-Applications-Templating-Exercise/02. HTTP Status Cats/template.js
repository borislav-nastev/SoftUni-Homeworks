window.addEventListener('load', renderCatTemplate);

const allCatsContainer = document.getElementById('allCats');
allCatsContainer.addEventListener('click', toggleStatus);

async function renderCatTemplate() {

    const [catStatusTemplate, statusContainerTemplate] = await Promise.all([
        fetch('./cat-status.hbs').then(res => res.text()),
        fetch('./status-container.hbs').then(res => res.text())
    ]);

    Handlebars.registerPartial('cat', catStatusTemplate);
    const template = Handlebars.compile(statusContainerTemplate);
    allCatsContainer.innerHTML = template({ cats });
}

function toggleStatus(e) {

    const target = e.target;
    if (target.tagName !== 'BUTTON') { return }

    const parent = target.parentElement;
    const statusDiv = parent.querySelector('.status');

    if (getComputedStyle(statusDiv, null).display === 'none') {
        statusDiv.style.display = 'block';
        target.textContent = 'Hide status code';
    } else {
        statusDiv.style.display = 'none';
        target.textContent = 'Show status code';
    }
}