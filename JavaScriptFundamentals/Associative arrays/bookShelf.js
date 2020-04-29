function bookShelf(data) {

    let input = data.slice();
    let shelves = {};
    let books = {};

    for (let line of input) {

        if (line.includes("->")) {

            let [shelf, genre] = line.split(" -> ");
            addShelf(shelves, shelf, genre);

        } else {

            line = line.split(": ");
            let bookTitle = line.shift();
            let [author, genre] = line[0].split(", ");
            addBooks(shelves, books, bookTitle, author, genre);
        }
    }

    let sortedShelvesByCountOfGenreBooks = Object.keys(books)
        .sort((a, b) => books[b].length - books[a].length);

    for (let genre of sortedShelvesByCountOfGenreBooks) {

        console.log(`${getKeyByValue(shelves, genre)} ${genre}: ${books[genre].length}`);

        books[genre]
            .sort((a, b) => a.title.localeCompare(b.title))
            .forEach(book => {
                console.log(`--> ${book.title}: ${book.author}`);
            });
    }

    function addShelf(shelves, shelf, genre) {

        if (!shelves.hasOwnProperty(shelf)) {
            shelves[shelf] = genre;
        }

        return shelves;
    }

    function addBooks(shelves, books, bookTitle, author, genre) {

        if (Object.values(shelves).includes(genre)) {

            let currentBook = {
                "author": author,
                "title": bookTitle,
            };

            if (!books.hasOwnProperty(genre)) {
                books[genre] = [];
            }

            books[genre].push(currentBook);
        }

        return books;
    }

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }
}

bookShelf(['1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history']);