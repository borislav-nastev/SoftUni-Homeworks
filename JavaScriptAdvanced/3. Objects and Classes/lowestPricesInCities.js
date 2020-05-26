function lowestPricesInCities(input) {

    let products = {};

    for (let line of input) {

        let [town, product, price] = line.split(' | ');

        if (!products.hasOwnProperty(product)) {
            products[product] = {};
        }

        products[product][town] = Number(price);
    }

    for (let productsKey in products) {

        let sortedByPrice = Object.entries(products[productsKey])
            .sort((a, b) => a[1] - b[1]);

        let price = sortedByPrice[0][1];
        let town = sortedByPrice[0][0];

        console.log(`${productsKey} -> ${price} (${town})`);
    }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);