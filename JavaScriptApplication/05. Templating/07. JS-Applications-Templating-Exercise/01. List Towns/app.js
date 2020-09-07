const inputEl = document.getElementById('towns');
const appContainer = document.getElementById('root');

(function loadCities() {

    document.getElementById('btnLoadTowns').addEventListener('click', loadTowns);

    async function loadTowns(e) {
        e.preventDefault();
        inputEl.placeholder = '';

        const value = inputEl.value;
        if (!value) {
            inputEl.placeholder = 'Please add towns';
            appContainer.innerHTML = '';
            return
        }

        const towns = value.split(',');

        const [townTemplate, townsContainerTemplate] = await Promise.all([
            fetch('./town-template.hbs').then(res => res.text()),
            fetch('./towns-container.hbs').then(res => res.text())
        ]);

        Handlebars.registerPartial('town', townTemplate);
        const template = Handlebars.compile(townsContainerTemplate);

        appContainer.innerHTML = template({ towns });
    }
})();