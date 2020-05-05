function censoredWords(text, word) {

    let symbol = "*";

    while (text.includes(word)) {
        text = text.replace(word, symbol.repeat(word.length));
    }

    console.log(text);
}

censoredWords("A small sentence with some words", "small");