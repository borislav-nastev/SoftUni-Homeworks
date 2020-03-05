function printExcellent (input) {

    let grade = Number(input.shift());

    if (grade >= 5.50) {
        console.log(`Excellent!`);
    }
}

printExcellent([5]);