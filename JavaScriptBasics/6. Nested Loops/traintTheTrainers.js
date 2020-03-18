function trainTheTrainers(input) {

    let countOfSubjects = Number(input.shift());
    let subject = input.shift();

    let counter = 0;
    let totalScore = 0;

    while (subject !== "Finish") {

        let averageScore = 0;

        for (let i = 0; i < countOfSubjects; i++) {

            let score = Number(input.shift());
            averageScore += score;
        }

        averageScore = averageScore / countOfSubjects;

        console.log(`${subject} - ${averageScore.toFixed(2)}.`);

        totalScore += averageScore;
        counter++;
        subject = input.shift();
    }

    totalScore = totalScore / counter;
    console.log(`Student's final assessment is ${totalScore.toFixed(2)}.`);
}

trainTheTrainers([3,
    "Arrays",
    4.53,
    5.23,
    5.00,
    "Lists",
    5.83,
    6.00,
    5.42,
    "Finish"
    ]);