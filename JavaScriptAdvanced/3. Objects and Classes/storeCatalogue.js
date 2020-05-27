function storeCatalogue(input) {

    let products = {};

    for (let line of input) {
        let [product, price] = line.split(' : ');
        let letter = product[0];

        if (!products.hasOwnProperty(letter)) {
            products[letter] = [];
        }

        products[letter].push([product, Number(price)]);
    }

    Object.keys(products)
        .sort((a, b) => a.localeCompare(b))
        .forEach(list => {
            console.log(list);
            products[list].sort((a, b) => a[0].localeCompare(b[0]))
                .forEach(product => {
                    console.log(`  ${product[0]}: ${product[1]}`);
                });
        });
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);