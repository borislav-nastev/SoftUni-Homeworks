class Kitchen {

    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(productsArr) {

        for (let line of productsArr) {
            let [product, quantity, price] = line.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            if (!this.productsInStock.hasOwnProperty(product) && this.budget - price >= 0) {
                this.budget -= price;
                this.productsInStock[product] = quantity;
                let message = `Successfully loaded ${quantity} ${product}`;
                this.actionsHistory.push(message);

            } else if (this.productsInStock.hasOwnProperty(product) && this.budget - price >= 0) {
                this.budget -= price;
                this.productsInStock[product] += quantity;
                let message = `Successfully loaded ${quantity} ${product}`;
                this.actionsHistory.push(message);

            } else {
                let message = `There was not enough money to load ${quantity} ${product}`;
                this.actionsHistory.push(message);
            }
        }

        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProductsArr, price) {

        if (!this.menu.hasOwnProperty(meal)) {
            let neededProductsObj = {};

            for (let line of neededProductsArr) {
                let [product, quantity] = line.split(' ');

                if (!neededProductsObj.hasOwnProperty(product)) {
                    neededProductsObj[product] = 0;
                }

                neededProductsObj[product] += Number(quantity);
            }

            this.menu[meal] = {products: neededProductsObj, price: Number(price)};
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;

        } else {
            return `The ${meal} is already in our menu, try something different.`;
        }
    }

    showTheMenu() {

        if (Object.keys(this.menu).length === 0) {
            return "Our menu is not ready yet, please come later...";
        }

        let output = [];

        for (let meal in this.menu) {
            output.push(`${meal} - $ ${this.menu[meal].price}`);
        }

        return output.join('\n') + '\n';
    }

    makeTheOrder(meal) {

        if (!this.menu.hasOwnProperty(meal)) {
           return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        let mealProducts = Object.keys(this.menu[meal].products);

        for (let product of mealProducts) {

            let productQuantity = this.menu[meal].products[product];

            if (!this.productsInStock.hasOwnProperty(product) || this.productsInStock[product] < productQuantity) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }

        this.budget += this.menu[meal].price;

        for (let product of mealProducts) {
            let productQuantity = this.menu[meal].products[product];
            this.productsInStock[product] -= productQuantity;
        }

        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
}

let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.addToMenu('Pasta', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('frozenYogurt'));

