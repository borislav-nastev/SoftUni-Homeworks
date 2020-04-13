function train(input) {

    let wagons = input.shift().split(" ").map(Number);
    let maxWagonPassengers = Number(input.shift());

    for (let line of input) {

        if (line.length > 2) {
            let [command, passengers] = line.split(" ");
            passengers = Number(passengers);
            addWagon(wagons, passengers);

        } else {
            let passengers = Number(line);
            addPassengers(wagons, passengers, maxWagonPassengers);
        }
    }

    console.log(wagons.join(" "));

    function addWagon(arr, val) {
        return arr.push(val);
    }

    function addPassengers(arr = [], passengers, WagonMaxVal) {

        for (let i = 0; i < arr.length; i++) {

            if ((arr[i] + passengers) <= WagonMaxVal) {
                arr[i] += passengers;
                break;
            }
        }

        return arr;
    }
}

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
);