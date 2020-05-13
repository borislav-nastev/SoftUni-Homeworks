function matchDates(input) {

    const regex = /(?<day>[0-9]{2})(\.|-|\/)(?<month>[A-Z]{1}[a-z]{2})\2(?<year>[0-9]{4})/gm;
    let validDate;

    while (validDate = regex.exec(input[0])) {
        console.log(`Day: ${validDate.groups.day}, Month: ${validDate.groups.month}, Year: ${validDate.groups.year}`);
    }
}

matchDates([
    '13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016'
]);