function passwordGenerator(input) {

    let password = input[0].concat(input[1]);
    let word = input[2].toLocaleUpperCase();
    let counter = 0;
    let newPassword = [];

    for (let char of password) {

        if (counter >= word.length) {
            counter = 0;
        }

        if (checkVowelChar(char)) {
            char = word[counter];
            counter++;
        }

        newPassword.push(char);
    }

    console.log(`Your generated password is ${newPassword.reverse().join("")}`);

    function checkVowelChar(char) {

        return char === "a" || char === "o" || char === "u" || char === "e" || char === "i";
    }
}

passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);