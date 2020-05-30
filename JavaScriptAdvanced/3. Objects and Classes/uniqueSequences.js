function uniqueSequences(input) {

    let data = input.map(el => JSON.parse(el).sort((a, b) => b - a));
    let uniqueArrays = [];

    data.forEach(el => {
        if (checkArrays(uniqueArrays, el)) {
            uniqueArrays.push(el);
        }
    });

    uniqueArrays.sort((a, b) => a.length - b.length)
        .forEach(line => console.log(`[${line.join(", ")}]`));

    function checkArrays(result, currArr) {
        let currArrToString = currArr.toString();
        let isUnique = true;

        for (let line of result) {
            line = line.toString();
            if (line === currArrToString) {
                isUnique = false;
                break;
            }
        }

        return isUnique;
    }
}

uniqueSequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]);