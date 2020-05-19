function cookingByNumbers(input) {

    let commands = {
        'chop': a => a / 2,
        'dice': a => Math.sqrt(a),
        'spice': a => a + 1,
        'bake': a => a * 3,
        'fillet': a => a - (a * 0.2)
    };

    let number = Number(input.shift());

    for (let line of input) {
        number = commands[line](number);
        console.log(number);
    }
}

cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);