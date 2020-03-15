function cinemaTickets(input) {

    let studentTickets = 0;
    let normalTickets = 0;
    let kidTickets = 0;
    let totalTickets = 0;

    let movie = input.shift();

    while (movie !== "Finish") {

        let place = Number(input.shift());
        let typeOfTicket = input.shift();

        let currentNormalTickets = 0;
        let currentStudentTickets = 0;
        let currentKidTickets = 0;
        let moviePlaces = 0;

        while (typeOfTicket !== "End") {

            switch (typeOfTicket) {
                case "standard": currentNormalTickets++; break;
                case "student": currentStudentTickets++; break;
                case "kid": currentKidTickets++; break;
            }

            moviePlaces++;

            if (moviePlaces >= place) {
                break;
            }

            typeOfTicket = input.shift();
        }

        totalTickets += moviePlaces;
        console.log(`${movie} - ${((moviePlaces / place) * 100).toFixed(2)}% full.`);

        studentTickets += currentStudentTickets;
        normalTickets += currentNormalTickets;
        kidTickets += currentKidTickets;
        movie = input.shift();
    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((normalTickets / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets([
    'The Matrix', '20',
    'student', 'standard',
    'kid', 'kid',
    'student', 'student',
    'standard', 'student',
    'End', 'The Green Mile',
    '17', 'student',
    'standard', 'standard',
    'student', 'standard',
    'student', 'End',
    'Amadeus', '3',
    'standard', 'standard',
    'standard', 'Finish'
]);