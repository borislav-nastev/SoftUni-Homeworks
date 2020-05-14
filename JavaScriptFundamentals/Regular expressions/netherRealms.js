function netherRealms(data) {

    let input = data[0].split(/[, ]+/g);
    const healthRegex = /[^0-9.\/+*-]/g;
    const digitsRegex = /[+-]?\d+\.?\d*/g;
    const dmgRegex = /\*|\//g;
    let demons = {};

    for (let line of input) {

        let health = 0;
        let damage = 0;

        if (line.match(healthRegex) !== null) {
            for (let char of line.match(healthRegex)) {
                health += char.charCodeAt(0);
            }
        }

        let digits = line.match(digitsRegex);

        if (digits !== null) {
            for (let digit of digits) {
                damage += Number(digit)
            }
        }

        let multiplyOrDivision = line.match(dmgRegex);

        if (multiplyOrDivision !== null) {

            for (let command of multiplyOrDivision) {

                if (command === "*") {
                    damage *= 2;

                } else  {
                    damage /= 2;
                }
            }
        }

        demons[line] = {};
        demons[line]["health"] = health;
        demons[line]["damage"] = damage;
    }

    Object.keys(demons).sort((a, b) => a.localeCompare(b))
        .forEach(demon => {
            console.log(`${demon} - ${demons[demon].health} health, ${demons[demon].damage.toFixed(2)} damage`);
        });
}

netherRealms(['M3ph1st0**, Azazel']);