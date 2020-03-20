function bitcoinMeaning(input) {

    let goldPricePerGram = 67.51;
    let bitcoinPrice = 11949.16;
    let dayFirstBitcoin = 0;
    let money = 0;
    let bitcoinCounter = 0;

    for (let i = 1; i <= input.length; i++) {

        let currentSum = input[i - 1] * goldPricePerGram;

        if (i % 3 === 0) {
            currentSum = currentSum - (currentSum * 0.30);
        }

        money += currentSum;

        if (money >= bitcoinPrice) {

            if (dayFirstBitcoin === 0) {
                dayFirstBitcoin = i;
            }

            bitcoinCounter += Math.floor(money / bitcoinPrice);
            money %= bitcoinPrice;
        }
    }

    console.log(`Bought bitcoins: ${bitcoinCounter}`);

    if (bitcoinCounter !== 0) {
        console.log(`Day of the first purchased bitcoin: ${dayFirstBitcoin}`);
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

bitcoinMeaning([3124.15, 504.212, 2511.124]);