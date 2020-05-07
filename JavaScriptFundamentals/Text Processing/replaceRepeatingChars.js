function replaceRepeatingChars(text) {

    let newText = "";
    let lastChar = "";

    text.split("")
        .forEach(char => {

            if (char !== lastChar) {
                newText += char;
            }

            lastChar = char;
        });

    console.log(newText);
}

replaceRepeatingChars('qqqwerqwecccwd');