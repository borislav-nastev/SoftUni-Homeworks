function systemComponents(input) {

    let systems = {};

    for (let line of input) {

        let [system, component, subComponent] = line.split(' | ');

        if (!systems.hasOwnProperty(system)) {
            systems[system] = {};
        }

        if (!systems[system].hasOwnProperty(component)) {
            systems[system][component] = [];
        }

        systems[system][component].push(subComponent);
    }

    Object.keys(systems)
        .sort((a, b) => Object.keys(systems[b]).length - Object.keys(systems[a]).length || a.localeCompare(b))
        .forEach(system => {
            console.log(system);

            Object.keys(systems[system]).sort((a, b) => systems[system][b].length - systems[system][a].length)
                .forEach(component => {
                    console.log(`|||${component}`);
                    systems[system][component].forEach(subComponent => {
                        console.log(`||||||${subComponent}`)
                    });
                });
        });
}

systemComponents(['SULS | Main Site | Home Page',
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
    'Indice | Session | Default Security']);