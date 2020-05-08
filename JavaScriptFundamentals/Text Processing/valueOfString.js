function valueOfString(data) {

    let text = data[0];
    let typeLetters = data[1];

    let letters = madeArray(text, typeLetters);
    let score = sumScore(letters);
    console.log(`The total sum is: ${score}`);

    function madeArray(input, type) {

        let array = [];

        if (type === "LOWERCASE") {
            array = input.split("")
                .filter(el => el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122);

        } else if (type === "UPPERCASE") {
            array = input.split("")
                .filter(el => el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90);
        }

        return array;
    }

    function sumScore(input) {

        let score = 0;

        for (let char of input) {
            score += char.charCodeAt(0);
        }

        return score;
    }

}

valueOfString([ 'AC/DC', 'UPPERCASE', '' ]);