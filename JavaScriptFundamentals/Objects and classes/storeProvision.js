function storeProvision(currentStock, orderedStock) {

    let stocks = {};

    for (let i = 0; i < currentStock.length; i += 2) {

        if (i % 2 === 0) {
            let product = currentStock[i];
            let quantity = currentStock[i + 1];

            stocks[product] = Number(quantity);
        }
    }

    for (let i = 0; i < orderedStock.length; i += 2) {

        if (i % 2 === 0) {
            let product = orderedStock[i];
            let quantity = Number(orderedStock[i + 1]);

            if (!stocks[product]) {
                stocks[product] = quantity;

            } else {
                stocks[product] += quantity;
            }
        }
    }

    for (let product in stocks) {
        console.log(`${product} -> ${stocks[product]}`);
    }
}

storeProvision([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);