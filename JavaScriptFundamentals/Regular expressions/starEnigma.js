function starEnigma(input) {

    let totalMessage = input.shift();
    let attackedPlanets = [];
    let destroyedPlanets = [];
    let decryptedMessages = [];

    for (let i = 0; i < totalMessage; i++) {

        let currentMessage = input[i];

        let decryptedMessage = decryptMessage(currentMessage);

        decryptedMessages.push(decryptedMessage);
    }

    for (let decryptedMessage of decryptedMessages) {

        let messagePattern = /@(?<name>[A-Z]+)[^@\-!:>]*:(?<population>[\d]+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<soldier>[\d]+)/gmi;
        let planetObject = messagePattern.exec(decryptedMessage);

        if (planetObject) {

            if (planetObject.groups.type === "A") {

                attackedPlanets.push(planetObject.groups.name);
            } else {

                destroyedPlanets.push(planetObject.groups.name);
            }
        }
    }

    printPlanetResults(attackedPlanets, "Attacked planets");
    printPlanetResults(destroyedPlanets, "Destroyed planets");

    function decryptMessage(message) {

        let letterPattern = /[star]/gmi;
        let countLetter = message.match(letterPattern).length;

        let decryptedMessage = "";

        for (let letter of message) {

            let letterValue = letter.charCodeAt(0);
            let newLetter = String.fromCharCode(letterValue - countLetter);

            decryptedMessage += newLetter;
        }

        return decryptedMessage;
    }

    function printPlanetResults(planets, text) {

        console.log(`${text}: ${planets.length}`);

        planets
            .sort((a, b) => a.localeCompare(b))
            .forEach(e => console.log(`-> ${e}`));
    }
}

starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);