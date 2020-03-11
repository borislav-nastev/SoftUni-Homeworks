function salary(input) {

    let n = Number(input.shift());
    let salary = Number(input.shift());
    let isNotMoney = false;

    for (let i = 0; i < n; i++) {

        switch (input[i]) {
            
            case "Facebook":
                salary -= 150;
                break;

            case "Instagram":
                salary -= 100;
                break;

            case "Reddit":
                salary -= 50;
                break;
        }

        if (salary <= 0) {

            console.log(`You have lost your salary.`);
            isNotMoney = true;
            break;
        }
    }

    if (!isNotMoney) {
        console.log(Math.round(salary));
    }
}

salary([3, 500, "Facebook", "Stackoverflow.com", "softuni.bg"]);