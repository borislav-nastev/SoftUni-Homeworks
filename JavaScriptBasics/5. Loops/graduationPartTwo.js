function graduationPartTwo(input) {

    let name = input.shift();
    let counter = 0;
    let score = 0;
    let counterBadGrades = 0;
    let isBreak = false;

    while (counter !== 12) {

        let grade = Number(input.shift());

        if (grade >= 4) {
            score += grade

        } else {
            counterBadGrades++;
        }

        if (counterBadGrades === 2) {
            console.log(`${name} has been excluded at ${counter} grade`);
            isBreak = true;
            break;
        }
        counter++;
    }

    score = score / counter;

    if (!isBreak) {
        console.log(`${name} graduated. Average grade: ${score.toFixed(2)}`);
    }
}

graduationPartTwo(["Gosho",
    5,
    5.5,
    6,
    5.43,
    5.5,
    6,
    5.55,
    5,
    6,
    6,
    5.43,
    5
]);