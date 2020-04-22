function inventory(input) {

    let heroes = {};

    for (let line of input) {
        let [hero, level, items] = line.split(" / ");
        items = items.split(", ").sort((a, b) => a.localeCompare(b));

        if (!heroes.hasOwnProperty(hero)) {
            heroes[hero] = {};
        }

        heroes[hero]["level"] = level;
        heroes[hero]["items"] = items.join(", ");
    }

    let sorted = Object.keys(heroes).sort((a, b) => heroes[a].level - heroes[b].level);

    for (let hero of sorted) {
        console.log(`Hero: ${hero}`);
        console.log(`level => ${heroes[hero].level}`);
        console.log(`items => ${heroes[hero].items}`);
    }
}

inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / "
]);