function rotateArray(input) {

    let countRotates = input.pop() % input.length;

    for (let i = 0; i < countRotates; i++) {
        let currentLastElement = input.pop();
        input.unshift(currentLastElement);
    }

    console.log(input.join(' '));
}

rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']
);