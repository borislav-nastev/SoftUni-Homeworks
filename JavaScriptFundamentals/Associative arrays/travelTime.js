function travelTime(data) {

    let input = data.slice();
    let destinations = new Map();

    for (let line of input) {

        let [country, city, price] = line.split(" > ");

        if (!destinations.has(country)) {

            let currentCity = new Map();
            currentCity.set(city, price);
            destinations.set(country, currentCity);

        } else {

            if (!destinations.get(country).has(city)) {
                destinations.get(country).set(city, price);
            }

            let currentCity = destinations.get(country);

            if (currentCity.get(city) > price) {
                currentCity.set(city, price)
            }

            destinations.set(country, currentCity);
        }


    }

    let destinationKeys = Array.from(destinations.keys())
        .sort((a, b) => a.localeCompare(b));

    for (let destination of destinationKeys) {

        let output = "";
        output += `${destination} -> `;

        let sortedCityByPrice = Array.from(destinations.get(destination).entries())
            .sort((a, b) => a[1] - b[1]);

        for (let [city, price] of sortedCityByPrice) {
            output += `${city} -> ${price} `;
        }

        console.log(output);
    }
}

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Aarna > 25010',
    'Bulgaria > Lukovit > 10'
]);