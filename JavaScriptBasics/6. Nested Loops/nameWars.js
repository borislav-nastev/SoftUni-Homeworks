function nameWars(input) {

    let name = input.shift();

    let winner = "";
    let winnerScore = 0;

    while (name !== "STOP") {

        let currentScore = 0;

        for (let i = 0; i < name.length; i++) {

            currentScore += name[i].charCodeAt(0);
        }

        if (winnerScore < currentScore) {
            winnerScore = currentScore;
            winner = name;
        }

        name = input.shift();
    }

    console.log(`Winner is ${winner} - ${winnerScore}!`);
}

nameWars(["Ivo",
    "Niki",
    "Valio",
    "Konstantin",
    "STOP"
]);