function oddOccurrences(data) {

    let input = data.slice()
        .toLocaleLowerCase()
        .split(" ");

    let wordsMap = new Map();

    for (let value of input) {

        if (!wordsMap.has(value)) {
            wordsMap.set(value, 0);
        }

        let count = wordsMap.get(value);
        count++;
        wordsMap.set(value, count);
    }

    let resultArray = [];

    Array.from([...wordsMap])
        .filter(e => e[1] % 2 !== 0)
        .forEach(word => resultArray.push(word[0]));

    console.log(resultArray.join(" "));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');