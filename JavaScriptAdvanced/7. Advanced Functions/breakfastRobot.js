function solution() {

    const elements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    return function (input) {
        const [command, product, quantity] = input.split(' ');

        if (command === 'report') {
            return report();

        } else if (command === 'restock') {
            return restock(product, Number(quantity));

        } else {
            return prepare(product, Number(quantity));
        }
    }

    function restock(product, quantity) {
        elements[product] += quantity;
        return 'Success';
    }

    function prepare(product, quantity) {

        const neededProducts = recipes[product];
        const microelement = checkAllProducts(neededProducts, quantity);

        if (elements.hasOwnProperty(microelement)) {
            return `Error: not enough ${microelement} in stock`;
        }

        for (const key in neededProducts) {
            elements[key] -= neededProducts[key] * quantity;
        }

        return 'Success';
    }

    function checkAllProducts(obj, quantity) {

        let microelement = '';

        for (const key in obj) {
            if ((obj[key] * quantity) > elements[key]) {
                microelement = key;
                break;
            }
        }

        return microelement;
    }

    function report() {

        const output = [];
        Object.keys(elements).forEach(el => output.push(`${el}=${elements[el]}`));
        return output.join(' ');
    }
}

const manager = solution();
console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));


