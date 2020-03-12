function graduation(input) {

    let name = input.shift();
    let counter = 0;
    let score = 0;

    while (counter !== 12) {
        let grade = Number(input.shift());

        if (grade >= 4) {
            counter++;
            score += grade;
        }
    }

    score = score / counter;
    console.log(`${name} graduated. Average grade: ${score.toFixed(2)}`);
}

graduation(["Ani",
    5,
    5.32,
    6,
    5.43,
    5,
    6,
    5.5,
    4.55,
    5,
    6,
    5.56,
    6
]);