function travelling(input) {

    let command = input.shift();

    while (command !== "End") {

        let priceOfTrip = Number(input.shift());
        let hasMoneyForTrip = false;
        let personMoney = 0;

        while (!hasMoneyForTrip) {

            let money = Number(input.shift());
            personMoney += money;

            if (personMoney >= priceOfTrip) {

                hasMoneyForTrip = true;
                console.log(`Going to ${command}!`);
                break;
            }
        }

        command = input.shift();
    }
}

travelling(["Greece",
    1000,
    200,
    200,
    300,
    100,
    150,
    240,
    "Spain",
    1200,
    300,
    500,
    193,
    423,
    "End"
]);