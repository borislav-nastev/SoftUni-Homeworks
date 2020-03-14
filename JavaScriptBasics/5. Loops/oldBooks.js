function oldBooks(input) {

    let favouriteBook = input.shift();
    let booksInLibrary = Number(input.shift());

    let counter = 0;
    let isFound = false;

    while (counter !== booksInLibrary) {

        let book = input.shift();

        if (book === favouriteBook) {
            console.log(`You checked ${counter} books and found it.`);
            isFound = true;
            break;
        }

        counter++;
    }

    if (!isFound) {
        console.log(`The book you search is not here!\nYou checked ${counter} books.`);
    }
}

oldBooks(["The Spot",
    4,
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify"
]);