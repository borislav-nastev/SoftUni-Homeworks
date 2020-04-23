function movies(input) {

    let movies = {};

    for (let line of input) {

        if (line.includes("addMovie")) {
            let movie = line.split("addMovie ");
            movie = movie[1];

            if (!movies.hasOwnProperty(movie)) {
                movies[movie] = {name: movie};
            }

        } else if (line.includes("directedBy")) {
            let [movie, director] = line.split(" directedBy ");

            if (movies.hasOwnProperty(movie)) {
                movies[movie]["director"] = director;
            }

        } else if (line.includes("onDate")) {
            let [movie, date] = line.split(" onDate ");

            if (movies.hasOwnProperty(movie)) {
                movies[movie]["date"] = date;
            }
        }
    }

    for (let movie in movies) {

        if (movies[movie].name && movies[movie].date && movies[movie].director) {
            console.log(JSON.stringify(movies[movie]));
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);