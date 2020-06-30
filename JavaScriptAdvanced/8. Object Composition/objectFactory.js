function objectFactory(input) {

    const data = JSON.parse(input);
    const myObj = {};

    data.forEach(el => {
        Object.keys(el)
            .forEach(key => {
                if (!myObj.hasOwnProperty(key)) {
                    myObj[key] = el[key];
                }
            });
    });

    return myObj;
}

console.log(objectFactory(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`));