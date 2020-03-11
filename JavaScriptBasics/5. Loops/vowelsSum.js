function vowelsSum(input) {

    let text = input[0];
    let score = 0;

    for (let i = 0; i < text.length; i++) {

        let letter = text[i];

        if (letter === "a") {
            score += 1;

        } else if (letter === "e") {
            score += 2;

        } else if (letter === "i") {
            score += 3;

        } else if (letter === "o") {
            score += 4;

        } else if (letter === "u") {
            score += 5;
        }
    }

    console.log(score);
}

vowelsSum(["bamboo"]);