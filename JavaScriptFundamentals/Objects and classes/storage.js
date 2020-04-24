class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = {};
    }

    get totalCost() {
        let currentSum = 0;

        for (let product in this.storage) {
            currentSum += Number(this.storage[product].price) * Number(this.storage[product].quantity);
        }

        return currentSum;
    }

    addProduct(product) {
        this.storage[product.name] = product;
        this.capacity -= Number(product.quantity);
    }

    getProducts() {
        let output = [];

        for (let key in this.storage) {
            output.push(JSON.stringify(this.storage[key]));
        }

        return output.join("\n");
    }
}

let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);
