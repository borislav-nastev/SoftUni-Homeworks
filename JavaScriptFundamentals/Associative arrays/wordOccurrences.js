function wordOccurrences(data) {

    let words = data.slice();
    let wordsMap = new Map();

    words.map(word => {

        if (!wordsMap.has(word)) {

            wordsMap.set(word, 1);

        } else {

            let currentCount = wordsMap.get(word);
            currentCount++;
            wordsMap.set(word, currentCount);
        }
    });

    let sortedWords = [];

    for (let word of wordsMap) {
        sortedWords.push(word);
    }

    sortedWords = sortedWords.sort((a, b) => b[1] - a[1]);
    sortedWords.forEach(word => console.log(`${word[0]} -> ${word[1]} times`));
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);