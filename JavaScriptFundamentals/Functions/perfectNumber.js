function isPerfect(number) {

    let halfNumber = number / 2;
    let allDivisors = [];

    for (let i = 1; i <= halfNumber; i++) {

        if (number % i === 0) {
            allDivisors.push(i);
        }
    }

    let divisorsSum = allDivisors.reduce((a, b) => a + b, 0);

    if (divisorsSum === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

isPerfect(6);