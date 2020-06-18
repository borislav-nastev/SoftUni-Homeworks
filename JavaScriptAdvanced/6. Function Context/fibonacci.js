function getFibonator() {

    let numbers = [0];

    return function() {

        if(numbers.length < 2) {
            numbers.push(1);
            return numbers[0] + numbers[1];
        }

        let lastTwoNumbers = numbers.slice(-2);
        let sum = lastTwoNumbers[0] + lastTwoNumbers[1];
        numbers.push(sum);
        return sum;
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13

