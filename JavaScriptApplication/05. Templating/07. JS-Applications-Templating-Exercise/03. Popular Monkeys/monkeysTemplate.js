import monkeys from './monkeys.js';
const appSection = document.querySelector('section');

(async function renderMonkey() {

    const [monkeyTemplate, appContainerTemplate] = await Promise.all([
        fetch('./monkey.hbs').then(res => res.text()),
        fetch('./app-section.hbs').then(res => res.text())
    ]);

    Handlebars.registerPartial('monkey', monkeyTemplate);
    const template = Handlebars.compile(appContainerTemplate);
    
    appSection.innerHTML = template({ monkeys });
    appSection.addEventListener('click', loadInfo);

    function loadInfo(e) {
        const target = e.target;
        if (target.tagName !== 'BUTTON') { return }

        const parent = target.parentElement;
        const infoP = parent.querySelector('p');
        infoP.style.display = 'block';
    }
})();