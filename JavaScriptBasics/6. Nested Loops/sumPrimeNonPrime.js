function sumPrime(input) {

    let primeSum = 0;
    let nonPrimeSum = 0;
    let command = input.shift();

    while (command !== "stop") {
        command = Number(command);
        let isPrime = true;

        if (command < 0) {
            console.log("Number is negative.");
            command = input.shift();
            continue;
        }

        if ((command !== 2 && Number.isInteger(command / 2)) || ((command !== 3 && Number.isInteger(command / 3)))
            || ((command !== 5 && Number.isInteger(command / 5)))) {
            nonPrimeSum += command;
            isPrime = false;
        }

        if (isPrime) {
            primeSum += command;
        }

        command = input.shift();
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

sumPrime([3,
    9,
    0,
    7,
    19,
    4,
    "stop"
    ]);