function arrayManipulations(input) {

    let numbers = input.shift().split(" ");

    for (let line of input) {

        let [command, element, index] = line.split(" ");

        if (command === "Add") {
            add(numbers, element);

        } else if (command === "Remove") {
            remove(element, numbers);

        } else if (command === "RemoveAt") {
            removeAt(element, numbers);

        } else if (command === "Insert") {
            insert(element, index, numbers);
        }
    }

    console.log(numbers.join(" "));

    function add(arr , element) {
        return arr.push(element);
    }

    function remove(element, arr = []) {

        if (arr.includes(element)) {
            let indexOfElement = arr.indexOf(element);
            arr = arr.splice(indexOfElement, 1);
        }

        return arr;
    }

    function removeAt(index, arr = []) {

        if (arr[index] !== undefined) {
            arr = arr.splice(index, 1);
        }

        return arr;
    }

    function insert(element, index, arr) {

        if (index > 0 && index < arr.length) {
            arr = arr.splice(index, 0, element);
        }

        return arr;
    }
}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);