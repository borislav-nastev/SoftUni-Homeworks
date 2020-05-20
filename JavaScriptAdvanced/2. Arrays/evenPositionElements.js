function evenPositionElements(input) {

    return input.filter((el, index) => index % 2 === 0)
        .join(" ");
}

console.log(evenPositionElements(['20', '30', '40']));