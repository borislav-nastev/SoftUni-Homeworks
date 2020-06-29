function carFactory(input) {

    const typeEngine = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ];

    const typeCarriages = [
        { type: 'hatchback', color: '' },
        { type: 'coupe', color: '' }
    ];

    const engine = typeEngine.filter(type => type.power === input.power || type.power > input.power)[0];
    const carriage = typeCarriages.filter(el => el.type === input.carriage)[0];
    carriage.color = input.color;

    let wheelSize = Math.round(input.wheelsize);

    if (wheelSize % 2 === 0) {
        wheelSize = wheelSize - 1;
    }

    const wheels = [wheelSize, wheelSize, wheelSize, wheelSize];

    const output = {
        model: input.model,
        engine,
        carriage,
        wheels
    };

    return output;
}

carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});