function substring(text, startIndex, countChars) {

    let newText = text.substr(startIndex, countChars);
    console.log(newText);
}

substring("ASentance", 1, 8);