function processOddNumbers(numbers = []) {

    let oddIndexNumbers = numbers.filter((e, i) => i % 2 !== 0);
    let multiplied = multiplyByTwo(oddIndexNumbers);
    let reversed = reverse(multiplied);

    console.log(reversed.join(" "));

    function multiplyByTwo(arr = []) {
        return arr.map(e => e * 2);
    }

    function reverse(arr = []) {
        return arr.reverse();
    }
}

processOddNumbers([3, 0, 10, 4, 7, 3]);