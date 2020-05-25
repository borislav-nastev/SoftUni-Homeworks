function cappyJuice(input) {

    let juices = {};
    let juicesBottles = {};

    for (let line of input) {
        let [kind, quantity] = line.split(' => ');

        if (!juices.hasOwnProperty(kind)) {
            juices[kind] = 0;
        }

        juices[kind] += Number(quantity);

        if (juices[kind] >= 1000) {

            let bottles = Math.floor(juices[kind] / 1000);
            juices[kind] = juices[kind] % 1000;;

            if (!juicesBottles.hasOwnProperty(kind)) {
                juicesBottles[kind] = 0;
            }

            juicesBottles[kind] += bottles;
        }
    }

    for (let juice in juicesBottles) {
        console.log(`${juice} => ${juicesBottles[juice]}`);
    }
}

cappyJuice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);