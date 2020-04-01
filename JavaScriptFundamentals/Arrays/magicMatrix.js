function isMagic(data = []) {

    let isEqual = false;
    let firstRowSum = data[0].reduce((a, b) => a + b, 0);

    for (let i = 0; i < data.length; i++) {

        let sumRow = data[i].reduce((a, b) => a + b, 0);
        let sumColumn = 0;

        for (let j = 0; j < data.length; j++) {
            sumColumn += data[j][i];
        }

        if (firstRowSum !== sumRow || firstRowSum !== sumColumn) {
            isEqual = false;
            break;
        }
        
        isEqual = sumColumn === sumRow;
    }

    console.log(isEqual);
}

isMagic([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]);