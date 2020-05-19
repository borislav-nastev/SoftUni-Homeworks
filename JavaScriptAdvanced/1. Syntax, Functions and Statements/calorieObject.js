function calorieObject(input) {

    let calories = {};

    for (let i = 0; i < input.length; i++) {

        if (i % 2 === 0) {
            calories[input[i]] = Number(input[i + 1]);
        }
    }

    console.log(calories);
}

calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);