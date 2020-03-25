function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let priceForHelmets = (Math.trunc(lostFights / 2) * helmetPrice);
    let priceForSwords = (Math.trunc(lostFights / 3) * swordPrice);
    let priceForShields = (Math.trunc(lostFights / 6) * shieldPrice);
    let priceForArmors = (Math.trunc(lostFights / 12) * armorPrice);
    let totalPrice = priceForHelmets + priceForSwords + priceForShields + priceForArmors;

    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}

solve(23,
    12.50,
    21.50,
    40,
    200
);