function nextDay(year, month, day) {

    let nextDay = new Date(year, month - 1, day + 1);
    console.log(`${nextDay.getFullYear()}-${nextDay.getMonth() + 1}-${nextDay.getDate()}`);
}

nextDay(2020, 3, 20);