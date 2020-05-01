function storage(data) {

    let products = data.slice();
    let productsMap = new Map();

    products.map(value => {

        let [product, quantity] = value.split(" ");
        quantity = Number(quantity);

        if (!productsMap.has(product)) {

            productsMap.set(product, quantity);

        } else {

            let currentQuantity = productsMap.get(product);
            currentQuantity += quantity;
            productsMap.set(product, currentQuantity);
        }
    });

    for (let [product, quantity] of productsMap) {
        console.log(`${product} -> ${quantity}`);
    }
}

storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);