function print(data = []) {

    let array = data.slice();
    let nthElement = Number(array.pop());
    let result = [];

    for (let i = 0; i < array.length; i += nthElement) {

        result.push(array[i]);
    }

    console.log(result.join(" "));
}

print(['1', '2', '3', '4', '5', '6']);