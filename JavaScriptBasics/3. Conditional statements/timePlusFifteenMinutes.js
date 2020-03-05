function timePlusFifteenMinutes(input) {

    let hours = Number(input.shift());
    let minutes = Number(input.shift());

    let hoursInMinutes = hours * 60;

    let totalMinutes = hoursInMinutes + minutes + 15;
    let newHour = Math.floor(totalMinutes / 60);
    let newMinutes = totalMinutes % 60;

    if (newMinutes < 10) {
        newMinutes = `0${newMinutes}`;
    }

    if (newHour > 23) {
        newHour = `0`;
    }

    console.log(`${newHour}:${newMinutes}`);
}

timePlusFifteenMinutes([12, 49]);