function toyShop(input) {

    let priceOnHoliday = Number(input.shift());
    let countPuzzles = Number(input.shift());
    let countDolls = Number(input.shift());
    let countBears = Number(input.shift());
    let countMinions = Number(input.shift());
    let countTrucks = Number(input.shift());

    let countToys = countPuzzles + countDolls + countBears + countMinions + countTrucks;
    let moneyFromToys = (countPuzzles * 2.60) + (countDolls * 3) + (countBears * 4.10) +
        (countMinions * 8.20) + (countTrucks * 2);

    let discount = 0;

    if (countToys >= 50) {
        discount = moneyFromToys / 4;
    }

    let moneyAfterDiscount = moneyFromToys - discount;
    let moneyForRent = moneyAfterDiscount / 10;
    let finalSum = moneyAfterDiscount - moneyForRent;

    if (finalSum >= priceOnHoliday) {

        let leftMoney = finalSum - priceOnHoliday;
        console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`);

    } else {
        
        let needMoney = priceOnHoliday - finalSum;
        console.log(`Not enough money! ${needMoney.toFixed(2)} lv needed.`);
    }
}

toyShop([320, 8, 2, 5, 5, 1]);