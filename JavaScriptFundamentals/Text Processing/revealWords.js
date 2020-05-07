function revealWords(words, text) {

    let wordsArray = words.split(", ");

    for (let word of wordsArray) {

        let wantedWord = "*".repeat(word.length);

        if (text.includes(wantedWord)) {
           text = text.replace(wantedWord, word);
        }
    }

    console.log(text);
}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');