function arenaTier(input) {

    let gladiators = {};
    let gladiatorsTotalSkill = {};

    for (let line of input) {

        if (line === 'Ave Cesar') {
            break;
        }

        if (line.includes('vs')) {

            let [firstGladiator, secondGladiator] = line.split(' vs ');
            battle(gladiators, firstGladiator, secondGladiator);

        } else {

            let [name, technique, skill] = line.split(' -> ');
            addGladiator(gladiators, name, technique, skill);
        }
    }

    for (let gladiatorsKey in gladiators) {
        let totalSkill = 0;

        for (let skill in gladiators[gladiatorsKey]) {
            totalSkill += Number(gladiators[gladiatorsKey][skill]);
        }

        gladiatorsTotalSkill[gladiatorsKey] = totalSkill;
    }

    Object.keys(gladiatorsTotalSkill)
        .sort((a, b) => gladiatorsTotalSkill[b] - gladiatorsTotalSkill[a] || a.localeCompare(b))
        .forEach(gladiator => {
            console.log(`${gladiator}: ${gladiatorsTotalSkill[gladiator]} skill`);

            Object.keys(gladiators[gladiator])
                .sort((a, b) => gladiators[gladiator][b] - gladiators[gladiator][a] || a.localeCompare(b))
                .forEach(technique => {
                    console.log(`- ${technique} <!> ${gladiators[gladiator][technique]}`);
                });
        });

    function addGladiator(obj, name, technique, skill) {
        if (!obj.hasOwnProperty(name)) {
            obj[name] = {};
        }

        if (!obj[name].hasOwnProperty(technique)) {
            obj[name][technique] = 0;
        }

        if (obj[name][technique] < skill) {
            obj[name][technique] = skill;
        }
    }

    function battle(obj, firstGladiator, secondGladiator) {

        if (obj.hasOwnProperty(firstGladiator) && obj.hasOwnProperty(secondGladiator)) {
            let firstGladiatorTechnique = Object.keys(obj[firstGladiator]);
            let secondGladiatorTechnique = Object.keys(obj[secondGladiator]);

            let commonTechnique = checkTechnique(firstGladiatorTechnique, secondGladiatorTechnique);

            if (commonTechnique) {
                checkForWinner(gladiators,
                    firstGladiator,
                    secondGladiator,
                    gladiators[firstGladiator][commonTechnique],
                    gladiators[secondGladiator][commonTechnique]);
            }
        }
    }

    function checkTechnique(firstGladiatorTechnique, secondGladiatorTechnique) {

        let commonTechnique = '';

        if (firstGladiatorTechnique.length < secondGladiatorTechnique.length) {
            commonTechnique = firstGladiatorTechnique[0];

        } else {
            commonTechnique = secondGladiatorTechnique[0];
        }

        if (firstGladiatorTechnique.includes(commonTechnique) && secondGladiatorTechnique.includes(commonTechnique)) {
            return commonTechnique;
        }

        return '';
    }

    function checkForWinner(obj, firstGladiator, secondGladiator, firstGladiatorSkill, secondGladiatorSkill) {

        if (firstGladiatorSkill > secondGladiatorSkill) {
            delete obj[secondGladiator];

        } else {
            delete obj[firstGladiator];
        }
    }

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
    'Ave Cesar']);