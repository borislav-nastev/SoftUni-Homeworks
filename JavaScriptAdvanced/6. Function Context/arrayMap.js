function arrayMap(arr, func) {

    return arr.reduce((acc, curr) => {
        acc.push(func(curr));
        return acc;
    }, []);

}

let numbers = [1, 2, 3, 4, 5];
console.log(arrayMap(numbers, (item) => item * 2));

let letters = ["a", "b", "c"];
console.log(arrayMap(letters, (l) => l.toLocaleUpperCase()));

