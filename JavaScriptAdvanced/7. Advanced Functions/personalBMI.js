function personalBMI(name, age, weight, height) {

    const heightInM = height / 100;
    const BMI = Math.round(weight / (heightInM * heightInM));
    const status = checkStatus(BMI);
    const person = createOutput();

    if (status === 'obese') {
        person.recommendation = 'admission required';
    }

    return person;

    function createOutput() {

        return {
            name,
            personalInfo: {
                age,
                weight,
                height
            },
            BMI,
            status
        };
    }

    function checkStatus(BMI) {

        if (BMI < 18.5) {
            return 'underweight';

        } else if (BMI < 25) {
            return 'normal';

        } else if (BMI < 30) {
            return 'overweight';

        } else if (BMI >= 30) {
            return 'obese';
        }
    }
}

console.log(personalBMI('Honey Boo Boo', 9, 57, 137));