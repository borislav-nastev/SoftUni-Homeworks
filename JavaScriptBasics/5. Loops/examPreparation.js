function examPreparation(input) {

    let countBadGrades = Number(input.shift());

    let counter = 0;
    let counterBadGrades = 0;
    let score = 0;
    let lastCommand = "";
    let isBadGrade = false;

    let command = input.shift();

    while (command !== "Enough") {

        let grade = Number(input.shift());
        lastCommand = command;
        score += grade;

        if (grade <= 4) {
            counterBadGrades++;
        }

        if (counterBadGrades === countBadGrades) {
            console.log(`You need a break, ${counterBadGrades} poor grades.`);
            isBadGrade = true;
            break;
        }

        counter++;
        command = input.shift();
    }

    score = score / counter;

    if (!isBadGrade) {
        console.log(`Average score: ${score.toFixed(2)}`);
        console.log(`Number of problems: ${counter}`);
        console.log(`Last problem: ${lastCommand}`);
    }
}

examPreparation([2,
    "Income",
    3,
    "Game Info",
    6,
    "Best Player",
    4,
    "Enough"
    ]);