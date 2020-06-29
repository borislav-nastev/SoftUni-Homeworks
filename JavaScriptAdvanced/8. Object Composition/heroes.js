function solve() {

    const mage = (name) => {

        const hero = {
            name,
            health: 100,
            mana: 100,
            cast: function (input) {
                this.mana--;
                console.log(`${this.name} cast ${input}`);
            }
        }

        return hero;
    }

    const fighter = (name) => {

        const hero = {
            name,
            health: 100,
            stamina: 100,
            fight: function() {
                this.stamina--;
                console.log(`${this.name} slashes at the foe!`);
            }
        }

        return hero;
    }

    const heroes = {
        mage,
        fighter
    }

    return heroes;
}


let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);
