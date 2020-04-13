function sumElements(numbers = []) {

    let firstElement = Number(numbers[0]);
    let lastElement = Number(numbers[numbers.length - 1]);
    let result = firstElement + lastElement;
    console.log(result);
}

sumElements(['20', '30', '40']);

