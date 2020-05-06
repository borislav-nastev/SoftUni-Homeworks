function modernTimesOfHashTag(message) {

    let words = [];

    message.split(" ")
        .forEach(word => {
            if (word.startsWith("#") && word.length > 1) {

                if (checkWord(word.slice(1))) {
                    words.push(word.slice(1));
                }
            }
        });

    words.forEach(word => console.log(word));

    function checkWord(word) {

        let isCorrect = false;
        word = word.toLocaleLowerCase();

        for (let char of word) {

            let asciiCharValue = char.charCodeAt(0);

            if (asciiCharValue >= 97 && asciiCharValue <= 122) {
                isCorrect = true;

            } else {
                isCorrect = false;
                break;
            }
        }

        return isCorrect;
    }
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');