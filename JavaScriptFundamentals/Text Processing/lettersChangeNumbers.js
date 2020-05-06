function lettersChangeNumbers(input) {

    let lettersObj = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 8,
        "i": 9,
        "j": 10,
        "k": 11,
        "l": 12,
        "m": 13,
        "n": 14,
        "o": 15,
        "p": 16,
        "q": 17,
        "r": 18,
        "s": 19,
        "t": 20,
        "u": 21,
        "v": 22,
        "w": 23,
        "x": 24,
        "y": 25,
        "z": 26
    };
    let totalScore = 0;

    input.split(" ")
        .filter(el => el !== "")
        .forEach(el => {

            let firstLetter = el[0];
            let lastLetter = el[el.length - 1];
            let number = Number(el.substring(1, el.length - 1));

            if (firstLetter.toLocaleUpperCase() === firstLetter) {
                number = number / lettersObj[firstLetter.toLocaleLowerCase()];

            } else {
                number = number * lettersObj[firstLetter.toLocaleLowerCase()];
            }

            if (lastLetter.toLocaleLowerCase() === lastLetter) {
                number = number + lettersObj[lastLetter.toLocaleLowerCase()];

            } else {
                number = number - lettersObj[lastLetter.toLocaleLowerCase()];
            }

            totalScore += number;
        });

    console.log(totalScore.toFixed(2));
}

lettersChangeNumbers('P34562Z q2576f   H456z');