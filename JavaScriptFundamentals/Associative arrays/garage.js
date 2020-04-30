function garage(data) {

    let garages = new Map();

    for (let line of data) {
        let garage = line[0];
        line = line.slice(4);
        line = line.split(", ");

        if (!garages.has(garage)) {
            garages.set(garage, []);
        }

        garages.get(garage).push(line);
    }

    for (let [garage, car] of garages) {
        console.log(`Garage № ${garage}`);

        car.forEach( el => {

            let output = [];

            for (let value of el) {
                let[carKey, carValue] = value.split(": ");
                output.push(`${carKey} - ${carValue}`);
            }

            console.log(`--- ${output.join(", ")}`)
        });
    }
}

garage([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);