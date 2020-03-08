function tradeCommissions(input) {

    let city = input.shift();
    let salesVolume = Number(input.shift());
    let commission = 0;
    let isNotCorrectSalesVolume = false;

    switch (city) {

        case "Sofia": {
            if (salesVolume >= 0 && salesVolume <= 500) {
                commission = salesVolume * 0.05;
            } else if (salesVolume > 500 && salesVolume <= 1000) {
                commission = salesVolume * 0.07;
            } else if (salesVolume > 1000 && salesVolume <= 10000) {
                commission = salesVolume * 0.08;
            } else if (salesVolume > 10000) {
                commission = salesVolume * 0.12;
            } else {
                isNotCorrectSalesVolume = true;
            }
        } break;

        case "Varna": {
            if (salesVolume >= 0 && salesVolume <= 500) {
                commission = salesVolume * 0.045;
            } else if (salesVolume > 500 && salesVolume <= 1000) {
                commission = salesVolume * 0.075;
            } else if (salesVolume > 1000 && salesVolume <= 10000) {
                commission = salesVolume * 0.10;
            } else if (salesVolume > 10000) {
                commission = salesVolume * 0.13;
            } else {
                isNotCorrectSalesVolume = true;
            }
        } break;

        case "Plovdiv": {
            if (salesVolume >= 0 && salesVolume <= 500) {
                commission = salesVolume * 0.055;
            } else if (salesVolume > 500 && salesVolume <= 1000) {
                commission = salesVolume * 0.08;
            } else if (salesVolume > 1000 && salesVolume <= 10000) {
                commission = salesVolume * 0.12;
            } else if (salesVolume > 10000) {
                commission = salesVolume * 0.145;
            } else {
                isNotCorrectSalesVolume = true;
            }
        } break;
        default: isNotCorrectSalesVolume = true;
            break;
    }

    if (!isNotCorrectSalesVolume) {
        console.log(commission.toFixed(2));
    } else {
        console.log("error");
    }
}

tradeCommissions(["Sofia", 10005]);