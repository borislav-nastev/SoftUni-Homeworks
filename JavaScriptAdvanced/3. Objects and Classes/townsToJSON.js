function townsToJSON(input) {

    let output = [];
    input.shift();

    for (let line of input) {
        let [city, latitude, longitude] = line.split('|').filter(e => e !== '').map(e => e.substring(1, e.length-1));
        let currentTown = {};

        currentTown['Town'] = city;
        currentTown['Latitude'] = Number(Number(latitude).toFixed(2));
        currentTown['Longitude'] = Number(Number(longitude).toFixed(2));


        output.push(currentTown);
    }

    console.log(JSON.stringify(output));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
);