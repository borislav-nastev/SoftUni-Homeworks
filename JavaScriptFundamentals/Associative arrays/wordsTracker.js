function wordsTracker(data) {

    let words = data[0].split(" ");
    let wordsMap = new Map();

    for (let word of words) {

        if (!wordsMap.has(word)) {
            wordsMap.set(word, 0);
        }
    }

    for (let i = 1; i < data.length; i++) {

        let currentWord = data[i];

        if (wordsMap.has(currentWord)) {

            let count = wordsMap.get(currentWord);
            count++;
            wordsMap.set(currentWord, count);
        }
    }

    Array.from([...wordsMap])
        .sort((a, b) => b[1] - a[1])
        .forEach(word => console.log(`${word[0]} - ${word[1]}`));
}

wordsTracker([
    'this sentence', 'In',
    'this', 'sentence',
    'you', 'have',
    'to', 'count',
    'the', 'occurances',
    'of', 'the',
    'words', 'this',
    'and', 'sentence',
    'because', 'this',
    'is', 'your',
    'task'
]);