function convertSecondsToHours(input) {

    let seconds = Number(input[0]) + Number(input[1]) + Number(input[2]);
    let minutes = seconds % 60;
    let hours = Math.floor(seconds / 60);

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    console.log(`${hours}:${minutes}`);

}

convertSecondsToHours([14, 12, 10]);