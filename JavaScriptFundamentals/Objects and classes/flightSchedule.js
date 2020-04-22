function flightSchedule(input) {

    let allFlights = input.shift();
    let status = input.shift();
    let statusToCheck = input.shift().join("");
    let dayFlights = {};

    for (let flight of allFlights) {
        let [flightNumber, ...destination] = flight.split(" ");
        destination = destination.join((" "));

        if (!dayFlights.hasOwnProperty(flightNumber)) {
            dayFlights[flightNumber] = {
                "Destination": destination,
                "Status": 'Ready to fly'
            }
        }
    }

    for (let flight of status) {
        let [flightNumber, status] = flight.split(" ");

        if (dayFlights.hasOwnProperty(flightNumber)) {
            dayFlights[flightNumber]["Status"] = status;
        }
    }

    for (let flight in dayFlights) {
        if(dayFlights[flight].Status === statusToCheck) {
            console.log(dayFlights[flight]);
        }
    }
}

flightSchedule([['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'],
        ['DL2120 Cancelled',
            'WN612 Cancelled',
            'WN1173 Cancelled',
            'SK330 Cancelled'],
        ['Ready to fly']
    ]);