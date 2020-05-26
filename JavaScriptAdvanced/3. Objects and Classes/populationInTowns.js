function populationInTowns(input) {

    let towns = {};

    for (let line of input) {
        let [ town, population ] = line.split(' <-> ');

        if (!towns.hasOwnProperty(town)) {
            towns[town] = 0;
        }

        towns[town] += Number(population);
    }

    Object.entries(towns)
        .forEach(town => console.log(`${town[0]} : ${town[1]}`));
}

populationInTowns(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);