function attachEventsListeners() {

    const helpers = {
        'days': convertFromDays,
        'hours': convertFromHours,
        'minutes': convertFromMinutes,
        'seconds': convertFromSeconds,
    }

    const elements = {
        daysInput: document.getElementById('days'),
        hoursInput: document.getElementById('hours'),
        minutesInput: document.getElementById('minutes'),
        secondsInput: document.getElementById('seconds'),
        buttons: Array.from(document.querySelectorAll('input[type="button"]')),
    }

    elements.buttons.forEach(button => {
        button.addEventListener('click', convert);
    });

    function convert(event) {

        const currentInput = event.target.previousElementSibling;
        const inputValue = currentInput.value;
        const inputType = currentInput.getAttribute('id');

        let result = helpers[inputType](Number(inputValue));

        elements.daysInput.value = result.days;
        elements.hoursInput.value = result.hours;
        elements.minutesInput.value = result.minutes;
        elements.secondsInput.value = result.seconds;
    }

    function convertFromDays(days) {

        let hours = days * 24;
        let minutes = days * 1440;
        let seconds = days * 86400;

        return {
            days,
            hours,
            minutes,
            seconds
        }
    }

    function convertFromHours(hours) {

        let days = hours / 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;

        return {
            days,
            hours,
            minutes,
            seconds
        }
    }

    function convertFromMinutes(minutes) {

        let hours = minutes / 60;
        let days = hours / 24;
        let seconds = minutes * 60;

        return {
            days,
            hours,
            minutes,
            seconds
        }
    }

    function convertFromSeconds(seconds) {

        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;

        return {
            days,
            hours,
            minutes,
            seconds
        }
    }
}