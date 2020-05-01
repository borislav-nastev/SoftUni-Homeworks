function piccolo(data) {

    let input = data.slice();
    let parking = [];

    for (let line of input) {

        let [direction, carNumber] = line.split(", ");

        if (direction === "IN") {

            if (!parking.includes(carNumber)) {
                parking.push(carNumber);
            }

        } else if (direction === "OUT") {

            if (parking.includes(carNumber)) {

                let indexOfCarNumber = parking.indexOf(carNumber);
                parking.splice(indexOfCarNumber, 1);
            }
        }
    }

    if (parking.length === 0) {

        console.log("Parking Lot is Empty");

    } else {

        parking.sort((a, b) => a.localeCompare(b))
            .forEach(carNumber => console.log(carNumber));
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);