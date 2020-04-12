function listOfProducts(products) {

    products
        .sort((a, b) => a.localeCompare(b))
        .forEach((value, index) => console.log(`${index + 1}.${value}`));
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);