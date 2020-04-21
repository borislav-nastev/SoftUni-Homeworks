function cityInfo(name, area, population, country, postCode) {

    let cityObject = {
        name: name,
        area: Number(area),
        population: Number(population),
        country: country,
        postCode: Number(postCode)
    };

    for (let cityObjectKey in cityObject) {
        console.log(`${cityObjectKey} -> ${cityObject[cityObjectKey]}`);
    }
}

cityInfo("Sofia", " 492", "1238438", "Bulgaria", "1000");