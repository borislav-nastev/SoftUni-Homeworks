function firstAndLastKNumbers(array = []) {

    let k = array.shift();
    let firstKElements = array.slice(0, k);
    let lastKElements = array.slice(-k);

    console.log(firstKElements.join(" "));
    console.log(lastKElements.join(" "));
}

firstAndLastKNumbers([3, 6, 7, 8, 9]);