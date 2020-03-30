function addAndRemove(data = []) {

    let resultArray = [];
    let currentValue = 1;

    for (let i = 0; i < data.length; i++) {

        if (data[i] === "add") {

            resultArray.push(currentValue);

        } else if (data[i] === "remove") {

            resultArray.pop();
        }

        currentValue++;
    }

    function printResult(arr) {

        if (arr.length >= 1) {

            return arr.join(" ");

        } else {

            return "Empty";
        }
    }

    console.log(printResult(resultArray));
}

addAndRemove(['add', 'add', 'remove', 'add', 'add']);