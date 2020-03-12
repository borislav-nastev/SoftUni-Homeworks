function accountBalance(input) {

    let countDeposits = Number(input.shift());
    let counter = 0;
    let money = Number(input.shift());
    let finalSum = 0;

    while (counter !== countDeposits) {

        if (money >= 0) {
            finalSum += money;
            console.log(`Increase: ${money.toFixed(2)}`);

        } else {
            console.log(`Invalid operation!`);
            break;
        }

        counter++;
        money = Number(input.shift());
    }

    console.log(`Total: ${finalSum.toFixed(2)}`);
}

accountBalance([5, 120, 45.55, -150]);