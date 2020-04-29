function armies(data) {

    let leaders = new Map();

    for (let line of data) {

        if (line.includes("arrives")) {
            line = line.split(" ");
            line.pop();
            let name = line.join(" ");

            if (!leaders.has(name)) {
                leaders.set(name, new Map());
            }

        } else if (line.includes("defeated")) {
            line = line.split(" ");
            line.pop();
            let name = line.join(" ");

            if (leaders.has(name)) {
                leaders.delete(name);
            }

        } else if (line.includes(":")) {

            let [name, values] = line.split(": ");
            let [armyName, armyCount] = values.split(", ");
            armyCount = Number(armyCount);

            if (leaders.has(name)) {

                let currentLeaderArmies = leaders.get(name);

                if (currentLeaderArmies.has(armyName)) {
                    armyCount += currentLeaderArmies.get(armyName);
                }

                currentLeaderArmies.set(armyName, armyCount);
            }

        } else {

            let [armyName, armyCount] = line.split(" + ");
            armyCount = Number(armyCount);
            addArmyCount(leaders, armyName, armyCount);
        }
    }

    let totalArmyCount = new Map();

    for (let [name, armies] of leaders) {

        let totalCount = 0;

        for (let [_, armyCount] of armies) {
            totalCount += armyCount;
        }

        totalArmyCount.set(name, totalCount);
    }

    Array.from(totalArmyCount.entries())
        .sort((a, b) => b[1] - a[1])
        .forEach(leader => {
            console.log(`${leader[0]}: ${leader[1]}`);

            Array.from(leaders.get(leader[0]))
                .sort((a, b) => b[1] - a[1])
                .forEach(value => console.log(`>>> ${value[0]} - ${value[1]}`));
        });

    function addArmyCount(input, armyName, armyCount) {

        for (let [_, value] of input) {

            if (value.has(armyName)) {

                let currentScore = value.get(armyName);
                currentScore += armyCount;
                value.set(armyName, currentScore);
            }
        }

        return input;
    }
}

armies([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
])