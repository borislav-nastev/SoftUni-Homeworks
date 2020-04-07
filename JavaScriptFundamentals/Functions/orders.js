function sumPrice(product, quantity) {
  
    let coffeePrice = 1.50;
    let waterPrice = 1.00;
    let cokePrice = 1.40;
    let snacksPrice = 2.00;

    let totalSum = 0;

    switch(product) {
        case "coffee": totalSum = coffeePrice * quantity; break;
        case "water": totalSum = waterPrice * quantity; break;
        case "coke": totalSum = cokePrice * quantity; break;
        case "snacks": totalSum = snacksPrice * quantity; break;
    }

    return totalSum.toFixed(2);
}

console.log(sumPrice("coffee", 2));