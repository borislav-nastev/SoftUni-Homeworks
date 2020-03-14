function walking(input) {

    let steps = 0;
    let isFulfilled = false;

    let command = input.shift();

    while (command !== "Going home") {

        command = Number(command);
        steps += command;

        if (steps >= 10000) {
            console.log(`Goal reached! Good job!`);
            isFulfilled = true;
            break;
        }

        command = input.shift();
    }

    let stepsToHome = Number(input.shift());
    steps += stepsToHome;

    if (!isFulfilled && steps >= 10000) {
        console.log(`Goal reached! Good job!`);

    } else if (!isFulfilled && steps < 10000) {
        let needSteps = 10000 - steps;
        console.log(`${needSteps} more steps to reach goal.`);
    }
}

walking([1500,
    3000,
    250,
    1548,
    2000,
    "Going home",
    1000
]);