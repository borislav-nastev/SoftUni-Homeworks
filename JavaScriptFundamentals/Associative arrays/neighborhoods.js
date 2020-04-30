function neighborhoods(data) {

    let neighborhoods = data[0].split(", ");
    let neighborhoodsMap = new Map();

    for (let neighborhood of neighborhoods) {

        if (!neighborhoodsMap.has(neighborhood)) {
            neighborhoodsMap.set(neighborhood, []);
        }
    }

    for (let i = 1; i < data.length; i++) {

        let [neighborhood, person] = data[i].split(" - ");

        if (neighborhoodsMap.has(neighborhood)) {
            neighborhoodsMap.get(neighborhood).push(person);
        }
    }

    let sortedNeighborhoods = Array.from([...neighborhoodsMap])
        .sort((a, b) => b[1].length - a[1].length);

    sortedNeighborhoods.forEach( neighborhood => {
        console.log(`${neighborhood[0]}: ${neighborhood[1].length}`);
        neighborhood[1].forEach(person => console.log(`--${person}`));
    });
}

neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
);