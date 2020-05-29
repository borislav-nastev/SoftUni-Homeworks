function countWordsInText(input) {

    const pattern = /\w+/gm;
    let words = input.slice(0)[0].match(pattern)

    const countWords = {};

    words.forEach(word => {
        if (!countWords.hasOwnProperty(word)) {
            countWords[word] = 0;
        }

        countWords[word]++;
    });

    console.log(JSON.stringify(countWords));
}

countWordsInText(['JS devs use Node.js for server-side JS.-- JS for devs']);