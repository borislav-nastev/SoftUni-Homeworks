function dayOfWeek(day) {

    let days = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7
    }

    let dayNumber = days[day];

    if (dayNumber) {
        return dayNumber;

    } else {
        return 'error';
    }
}

console.log(dayOfWeek('Invalid'));