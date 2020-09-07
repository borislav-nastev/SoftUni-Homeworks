const contacts = [
    {
        id: 1,
        name: "John",
        phoneNumber: "0847759632",
        email: "john@john.com"
    },
    {
        id: 2,
        name: "Merrie",
        phoneNumber: "0845996111",
        email: "merrie@merrie.com"
    },
    {
        id: 3,
        name: "Adam",
        phoneNumber: "0866592475",
        email: "adam@stamat.com"
    },
    {
        id: 4,
        name: "Peter",
        phoneNumber: "0866592475",
        email: "peter@peter.com"
    },
    {
        id: 5,
        name: "Max",
        phoneNumber: "0866592475",
        email: "max@max.com"
    },
    {
        id: 6,
        name: "David",
        phoneNumber: "0866592475",
        email: "david@david.com"
    }
]

async function getTemplate() {

    const appContainer = document.getElementById('app');

    const [contactCardTemplate, contactsTemplate] = await Promise.all([
        fetch('./contactCard.hbs').then(res => res.text()),
        fetch('./contacts.hbs').then(res => res.text())
    ]);

    Handlebars.registerPartial('contact', contactCardTemplate);
    const template = Handlebars.compile(contactsTemplate);
    appContainer.innerHTML = template({ contacts });

    appContainer.addEventListener('click', showDetails);

    function showDetails(e) {

        const target = e.target;

        if (target.tagName !== 'BUTTON') { return }

        const parent = target.parentElement;
        const detailsDiv = parent.querySelector('.details')

        if (getComputedStyle(detailsDiv, null).display === 'none') {
            detailsDiv.style.display = 'block';
        } else {
            detailsDiv.style.display = 'none';
        }
    }
}

getTemplate()
