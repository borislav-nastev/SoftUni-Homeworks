function oddEvenSum(input) {

    let n = Number(input.shift());

    let sumOfEvenIndexNumbers = 0;
    let sumOfOddIndexNumbers = 0;

    for (let i = 0; i < n; i++) {

        if (i % 2 === 0) {
            sumOfEvenIndexNumbers += Number(input[i]);

        } else {
            sumOfOddIndexNumbers += Number(input[i]);
        }
    }

    if (sumOfEvenIndexNumbers === sumOfOddIndexNumbers) {
        console.log(`Yes\nSum = ${sumOfEvenIndexNumbers}`);

    } else {
        let diff = Math.abs(sumOfOddIndexNumbers - sumOfEvenIndexNumbers);
        console.log(`No\nDiff = ${diff}`);
    }
}

oddEvenSum([4, 3, 5, 1, -2]);