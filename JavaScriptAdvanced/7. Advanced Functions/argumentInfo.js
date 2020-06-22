function argumentsInfo(...data) {

    const typeOfArguments = {};
    const elements = [];

    data.forEach(el => {
        const type = typeof el;

        if (!typeOfArguments.hasOwnProperty(type)) {
            typeOfArguments[type] = 0;
        }

        elements.push([type, el]);
        typeOfArguments[type]++;
    });

    elements.forEach(el => console.log(`${el[0]}: ${el[1]}`));

    Object.keys(typeOfArguments)
        .sort((a, b) => typeOfArguments[b] - typeOfArguments[a])
        .forEach(type => {
            console.log(`${type} = ${typeOfArguments[type]}`)
        });
}

argumentsInfo(42, 'cat', 15, 'kitten', 'tomcat');