function evenAndOddSubtraction(input = []) {

    let evenSum = input
        .filter(e => e % 2 === 0)
        .reduce((a, b) => a + b, 0);

    let oddSum = input
        .filter(e => e % 2 !== 0)
        .reduce((a, b) => a + b, 0);

    console.log(evenSum - oddSum);
}

evenAndOddSubtraction([3,5,7,9]);