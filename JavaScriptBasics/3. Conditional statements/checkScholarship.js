function checkScholarship(input) {

    let income = Number(input.shift());
    let grade = Number(input.shift());
    let minSalary = Number(input.shift());
    let socialScholarship = 0;
    let excellentScholarship = 0;
    let isExcellent = false;
    let isSocial = false;

    if (grade >= 5.50) {
        excellentScholarship = grade * 25;
        isExcellent = true;
    }

    if (income < minSalary && grade > 4.50) {
        socialScholarship = minSalary * 0.35;
        isSocial = true;
    }

    if (isSocial && (socialScholarship > excellentScholarship)) {

        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);

    } else if (isExcellent && (excellentScholarship >= socialScholarship)) {

        console.log(`You get a scholarship for excellent results ${Math.floor(excellentScholarship)} BGN`);

    } else {

        console.log(`You cannot get a scholarship!`);
    }
}

checkScholarship([300.00, 5.65, 420.00]);