const symbols = {
    'Sunny': '&#x2600',
    'Partly sunny': '&#x26C5',
    'Overcast': '&#x2601',
    'Rain': '&#x2614',
    'Degrees': '&#176'
}

function createHtmlEl(type, content, attributes) {
    const result = document.createElement(type);

    if (attributes !== undefined) {
        Object.assign(result, attributes);
    }

    if (Array.isArray(content)) {
        content.forEach(append);
    } else {
        append(content);
    }

    function append(node) {
        if (typeof node === 'string' || typeof node === 'number') {
            node = document.createTextNode(node);
        }
        result.appendChild(node);
    }

    return result;
}

function createTodayForecast(today) {

    const symbolSpan = createHtmlEl('span', '', { className: 'condition symbol' });
    symbolSpan.innerHTML = symbols[today.forecast.condition];

    const degreesSpan = createHtmlEl('span', '', { className: 'forecast-data' });
    degreesSpan.innerHTML = `${today.forecast.low}${symbols.Degrees}/${today.forecast.high}${symbols.Degrees}`;

    return createHtmlEl('div', [
        symbolSpan,
        createHtmlEl('span', [
            createHtmlEl('span', today.name, { className: 'forecast-data' }),
            degreesSpan,
            createHtmlEl('span', today.forecast.condition, { className: 'forecast-data' })
        ], { className: 'condition' })
    ], { className: 'forecasts' });
}

function createUpcomingForecast(upcoming) {

    const nextThreeDays = [];

    upcoming.forecast.forEach(day => {

        const symbolSpan = createHtmlEl('span', '', { className: 'symbol' });
        symbolSpan.innerHTML = symbols[day.condition];

        const degreesSpan = createHtmlEl('span', '', { className: 'forecast-data' });
        degreesSpan.innerHTML = `${day.low}${symbols.Degrees}/${day.high}${symbols.Degrees}`;

        const currentDay = createHtmlEl('span', [
            symbolSpan,
            degreesSpan,
            createHtmlEl('span', day.condition, { className: 'forecast-data' })
        ], { className: 'upcoming' });

        nextThreeDays.push(currentDay);
    });

    return createHtmlEl('div', nextThreeDays, { className: 'forecast-info' });
}

export {
    createTodayForecast,
    createUpcomingForecast,
}