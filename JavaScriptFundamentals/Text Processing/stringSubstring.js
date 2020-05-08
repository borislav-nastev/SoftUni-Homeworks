function stingSubstring(word, text) {

    word = word.toLocaleLowerCase();
    text = text.toLocaleLowerCase().split(" ");

    if (text.includes(word)) {
        console.log(word);

    } else {
        console.log(`${word} not found!`);
    }
}

stingSubstring('java',
    'JavaScript is the best programming language');