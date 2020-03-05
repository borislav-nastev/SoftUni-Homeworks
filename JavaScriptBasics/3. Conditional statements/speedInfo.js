function speedInfo(input) {

    let speed = Number(input.shift());
    let output = '';

    if (speed <= 10) {
        output = "slow";

    } else if (speed > 10 && speed <= 50) {
        output = "average";

    } else if (speed > 50 && speed <= 150) {
        output = "fast";

    } else if (speed > 150 && speed <= 1000) {
        output = "ultra fast";
        
    } else {
        output = "extremely fast";
    }

    console.log(output);
}

speedInfo([8]);