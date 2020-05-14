function race(input) {

    let participants = input.shift()
        .split(", ");

    let participantsObject = {};

    for (let line of input) {

        if (line === "end of race") {
            break;
        }

        let currentName = "";
        let currentDistance = 0;

        for (let char of line) {

            const nameRegex = /[A-Za-z]/gm;
            const distanceRegex = /\d/gm;

            if (nameRegex.test(char)) {
                currentName += char
            }

            if (distanceRegex.test(char)) {
                currentDistance += Number(char);
            }
        }

        if (participants.includes(currentName)) {

            if (!participantsObject.hasOwnProperty(currentName)) {
                participantsObject[currentName] = 0;
            }

            participantsObject[currentName] += currentDistance;
        }
    }

    let places = {
        1: "st",
        2: "nd",
        3: "rd"
    };

    Object.keys(participantsObject)
        .sort((a, b) => participantsObject[b] - participantsObject[a])
        .slice(0, 3)
        .forEach((name, index) => {
            let place = index + 1;
            console.log(`${place}${places[place]} place: ${name}`);
        });
}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);