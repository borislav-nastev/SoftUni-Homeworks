function catalogue(input) {

    let productObj = {};
    let arr = input.slice();

    for (let line of arr) {

        line = line.split(" : ");
        let [product, price] = line;
        let products = [product, price];
        let firstLetter = product[0];

        if (!productObj.hasOwnProperty(firstLetter)) {
            productObj[firstLetter] = [];
        }

        productObj[firstLetter].push(products);
    }

    let sortedKeys = Object.keys(productObj)
        .sort((a, b) => a.localeCompare(b));

    for (let element of sortedKeys) {

        console.log(element);

        productObj[element]
            .sort((a,b) => a[0].localeCompare(b[0]))
            .forEach(e => console.log(`  ${e[0]}: ${e[1]}`));
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);