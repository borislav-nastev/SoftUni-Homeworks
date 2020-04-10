function arrayManipulator(data, commands) {

    let array = data.slice();

    function add(arr, commands) {
        let index = commands.shift();

        if (index >= 0 && index <= arr.length) {
            arr = arr.splice(index, 0, Number(commands[0]));
        }

        return arr;
    }

    function addMany(arr, commands) {
        let index = commands.shift();

        if (index >= 0 && index <= arr.length) {
            for (let value of commands) {
                arr.splice(index++, 0, Number(value));
            }
        }

        return arr;
    }

    function remove(arr, commands) {
        let index = Number(commands[0]);

        if (index >= 0 && index < arr.length) {
            return arr.splice(index, 1);
        }
    }

    function shift(arr, commands) {
        let positions = commands[0];

        if (positions > 0) {

            for (let i = 0; i < positions; i++) {
                let currentElement = arr.shift();
                arr.push(currentElement);
            }
        }

        return arr;
    }

    function sumPairs(arr) {
        let result = [];

        for (let i = 0; i < arr.length; i += 2) {
            let firstNum = Number(arr[i]) || 0;
            let secondNum = Number(arr[i + 1]) || 0;
            let sum = firstNum + secondNum;
            result.push(sum);
        }

        return result;
    }

    for (let line of commands) {

        line = line.split(" ");
        let command = line.shift();

        if (command === "print") {
            console.log(`[ ${array.join(", ")} ]`);
            break;
        }

        if (command === "add") {
            add(array, line);

        } else if (command === "addMany") {
            addMany(array, line);

        } else if (command === "contains") {
            let element = Number(line[0]);
            console.log(array.indexOf(element));

        } else if (command === "remove") {
            remove(array, line);

        } else if (command === "shift") {
            shift(array, line);

        } else if (command === "sumPairs") {
            array = sumPairs(array);
        }
    }
}

// manipulator([1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']
// );

// manipulator([1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
// );

arrayManipulator([2, 2, 4, 2, 4],
    ["add 1 4", "sumPairs", "print"]);

// manipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
//     ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);