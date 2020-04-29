function arenaTier(data) {

    let input = data.slice();
    let gladiators = new Map();

    for (let line of input) {

        if (line === "Ave Cesar") {
            break;
        }

        if (!line.includes("vs")) {

            let [name, technique, skill] = line.split(" -> ");

            if (!gladiators.has(name)) {

                let currentTechnique = new Map();
                currentTechnique.set(technique, skill);
                gladiators.set(name, currentTechnique);

            }

            if (!gladiators.get(name).has(technique)) {
                gladiators.get(name).set(technique, skill);
            }

            if (gladiators.get(name).has(technique)) {

                let currentSkill = gladiators.get(name).get(technique);

                if (currentSkill < skill) {
                    gladiators.get(name).set(technique, skill)
                }
            }

        } else {

            let [firstGladiator, secondGladiator] = line.split(" vs ");

            if (gladiators.has(firstGladiator) && gladiators.has(secondGladiator)) {

                for (let [technique, skill] of gladiators.get(firstGladiator)) {

                    if (gladiators.get(secondGladiator).has(technique)) {

                        let secondGladiatorSkill = gladiators.get(secondGladiator).get(technique);

                        if (skill > secondGladiatorSkill) {

                            gladiators.delete(secondGladiator);
                            break;

                        } else if (secondGladiatorSkill > skill) {

                            gladiators.delete(firstGladiator);
                            break;
                        }
                    }
                }
            }
        }
    }

    let gladiatorsTotalSkill = new Map();

    for (let [name, technique] of gladiators) {

        let totalSkill = 0;

        for (let [_, skill] of technique) {
            totalSkill += Number(skill);
        }

        gladiatorsTotalSkill.set(name, totalSkill);
    }

    Array.from(gladiatorsTotalSkill.entries())
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach(gladiator => {
            console.log(`${gladiator[0]}: ${gladiator[1]} skill`);

            Array.from(gladiators.get(gladiator[0]))
                .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                .forEach(value => console.log(`- ${value[0]} <!> ${value[1]}`));
        });
}

arenaTier([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'
]);