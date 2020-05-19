function timeToWalk(steps, stepLength, speed) {

    let distance = steps * stepLength;
    let timeForRest = Math.floor(distance / 500);
    let walkingTime = (60 * (distance / (speed * 1000)) + timeForRest);

    let hours = Math.floor(walkingTime / 60);
    let min = Math.floor(walkingTime);
    let seconds = Math.round(walkingTime * 60) % 60;

    if(hours < 10) {
        hours = `0${hours}`;
    }
    if(min < 10) {
        min = `0${min}`;
    }
    if(seconds < 10) {
        seconds = `0${seconds};`
    }

    console.log(`${hours}:${min}:${seconds}`);
}

timeToWalk(2564, 0.70, 5.5);