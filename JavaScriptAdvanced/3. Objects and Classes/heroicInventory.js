function heroicInventory(input) {

    let output = [];

    for (let line of input) {

        let [name, level, items] = line.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        output.push({name, level, items});
    }

    console.log(JSON.stringify(output));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1']);