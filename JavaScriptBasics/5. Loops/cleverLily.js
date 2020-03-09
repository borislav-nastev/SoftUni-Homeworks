function cleverLily(input) {

    let age = Number(input.shift());
    let priceOfWashingMachine = Number(input.shift());
    let priceOfToy = Number(input.shift());
    let moneyForBirthday = 10;

    let herMoney = 0;
    let counter = 0;
    let countToys = 0;

    for (let i = 1; i <= age; i++) {

        if (i % 2 === 0) {
            counter++;
            herMoney += ((moneyForBirthday * counter) - 1);

        } else {
            countToys++
        }
    }

    let priceOfToys = countToys * priceOfToy;
    let totalMoney = priceOfToys + herMoney;

    if (totalMoney >= priceOfWashingMachine) {
        let leftMoney = totalMoney - priceOfWashingMachine;
        console.log(`Yes! ${leftMoney.toFixed(2)}`);

    } else {
        let needMoney = Math.abs(totalMoney - priceOfWashingMachine);
        console.log(`No! ${needMoney.toFixed(2)}`);
    }
}

cleverLily([21, 1570.98, 3]);