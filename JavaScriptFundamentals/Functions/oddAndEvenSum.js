function oddAndEvenSum(number) {

    let evenNumbers = [];
    let oddNumbers = [];

    String(number)
        .split("")
        .filter(e => {
            if (Number(e) % 2 === 0) {
                evenNumbers.push(Number(e));
            } else {
                oddNumbers.push(Number(e));
            }
        });

    let evenSum = sumResult(evenNumbers);
    let oddSum = sumResult(oddNumbers);
        
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;

    function sumResult(array) {
        return array.reduce((a, b) => a + b, 0);
    }
}

console.log(oddAndEvenSum(3495892137259234));