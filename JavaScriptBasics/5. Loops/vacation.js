function vacation(input) {

    let moneyForHoliday = Number(input.shift());
    let herMoney = Number(input.shift());
    let counter = 0;
    let counterSpend = 0;
    let isSave = false;

    while (counterSpend !== 5) {
        let command = input.shift();
        let money = Number(input.shift());

        if (command === "spend") {
            counterSpend++;
            herMoney -= money;

            if (herMoney < 0) {
                herMoney = 0;
            }
        } else {
            herMoney += money;
            counterSpend = 0;
        }

        counter++;

        if (herMoney >= moneyForHoliday) {
            console.log(`You saved the money for ${counter} days.`);
            isSave = true;
            break;
        }
    }

    if (!isSave) {
        console.log(`You can't save the money.\n${counter}`);
    }
}

vacation([110,
    60,
    "spend",
    10,
    "spend",
    10,
    "spend",
    10,
    "spend",
    10,
    "spend",
    10
]);