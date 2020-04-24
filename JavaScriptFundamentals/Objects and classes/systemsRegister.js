function systemComponents(input) {

    let systems = {};

    for (let line of input) {
        let [systemName, componentName, subComponentName] = line.split(" | ");

        if (!systems.hasOwnProperty(systemName)) {
            systems[systemName] = {};
        }

        if (!systems[systemName].hasOwnProperty(componentName)) {
            systems[systemName][componentName] = [];
        }

        systems[systemName][componentName].push(subComponentName);
    }

    let sortedSystems = Object.keys(systems).sort((a, b) => Object.keys(systems[b]).length - Object.keys(systems[a]).length || a.localeCompare(b));

    sortedSystems.forEach(key => {

        console.log(key);

        let sortedComponents = Object.keys(systems[key]).sort((a,b) => Object.keys(systems[key][b]).length - Object.keys(systems[key][a]).length);

        sortedComponents.forEach(el => {
            console.log(`|||${el}`);
            systems[key][el].forEach(e => console.log(`||||||${e}`));
        });
    });
}

systemComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);