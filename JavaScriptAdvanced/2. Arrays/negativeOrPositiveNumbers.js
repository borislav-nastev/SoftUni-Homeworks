function negativeOrPositiveNumbers(input) {

    let output = [];

    input.forEach(el => {
        if (el < 0) {
            output.unshift(el);
        } else {
            output.push(el);
        }
    });

    return output.join('\n');
}

console.log(negativeOrPositiveNumbers([3, -2, 0, -1]));