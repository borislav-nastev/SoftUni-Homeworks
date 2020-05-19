function fruit(kindFruit, grams, priceForKg) {

    let kg = grams / 1000;
    let totalPrice = kg * priceForKg;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${kindFruit}.`);
}

fruit('apple', 1563, 2.35);