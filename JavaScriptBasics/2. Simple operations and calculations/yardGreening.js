function yardGreening(input) {

    let area = Number(input.shift());
    let currentSum = area * 7.61;
    let discount = currentSum * 0.18;
    let finalSum = currentSum - discount;

    console.log(`The final price is: ${finalSum.toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`);

}

yardGreening([540]);