function printChars(firstChar = "", secondChar = "") {

    let asciiFirstChar = firstChar.charCodeAt(0);
    let asciiSecondChar = secondChar.charCodeAt(0);
    let outPut = "";

    function findChars(start, end) {

        for (let i = start + 1; i < end; i++) {
            let currentElement = String.fromCharCode(i);
            outPut += `${currentElement} `;
        }

        return outPut;
    }

    if (asciiSecondChar < asciiFirstChar) {
        findChars(asciiSecondChar, asciiFirstChar);
    } else {
        findChars(asciiFirstChar, asciiSecondChar);
    }

    console.log(outPut);
}

printChars("C", '#');