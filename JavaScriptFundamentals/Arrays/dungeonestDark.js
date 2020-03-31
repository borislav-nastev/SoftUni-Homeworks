function dungeonestDark(arr) {

    let health = 100;
    let coins = 0;
    let room = 0;
    let isDead = false;
    let string = arr[0];
    let array = string.split("|");

    for (let line of array) {

        let [command, value] = line.split(" ");

        if (command === "potion") {

            if(health + Number(value) > 100) {
                value = 100 - health;
            }

            health += Number(value);
            room++;
            console.log(`You healed for ${value} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (command === "chest") {
            
            room++;
            coins += Number(value);
            console.log(`You found ${value} coins.`);

        } else {

            room++;
            health -= Number(value);

            if(health > 0) {

                console.log(`You slayed ${command}.`);
            } else {

                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${room}`);
                isDead = true;
                break;
            }
        }
    }

    if(!isDead) {
        
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark([ 'rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000' ]);