function cookieFactory(input) {

    let batch = Number(input.shift());

    let counter = 0;
    let isFlour = false;
    let isEggs = false;
    let isSugar = false;
    let isBake = false;

    while (counter !== batch) {

        let command = input.shift();

        while (command !== "Bake!") {

            if (command === "flour") {
                isFlour = true;

            } else if (command === "eggs") {
                isEggs = true;

            } else if (command === "sugar") {
                isSugar = true;
            }

            command = input.shift();
        }

        if (isSugar && isFlour && isEggs) {
            counter++;
            isBake = true;
        }

        if (isBake) {
            console.log(`Baking batch number ${counter}...`);

        } else {
            console.log(`The batter should contain flour, eggs and sugar!`);
        }
    }
}

cookieFactory([
    '3', 'flour', 'eggs',
    'jam', 'Bake!', 'sugar',
    'Bake!', 'flour', 'eggs',
    'milk', 'almonds', 'sugar',
    'Bake!', 'flour', 'eggs',
    'sugar', 'Bake!'
]);