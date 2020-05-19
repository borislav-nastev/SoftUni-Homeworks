function roadRadar(input) {

    let speedLimits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }

    let speed = input[0];
    let place = input[1];
    let output = "";

    if (speed > speedLimits[place]) {

        let different = speed - speedLimits[place];

        if (different <= 20) {
            output = 'speeding';

        } else if (different <= 40) {
            output = 'excessive speeding';

        } else {
            output = 'reckless driving';
        }
    }

    console.log(output);
}

roadRadar([200, 'motorway']);