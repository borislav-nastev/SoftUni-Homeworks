function companyUsers(data) {

    let input = data.slice();
    let companies = new Map();

    input.forEach(value => {

        let [company, employeeId] = value.split(" -> ");

        if (!companies.has(company)) {
            companies.set(company, new Set());
        }

        companies.get(company).add(employeeId);
    });

    Array.from(companies.keys())
        .sort((a, b) => a.localeCompare(b))
        .forEach(company => {
            console.log(company);
            companies.get(company).forEach(employeeId => console.log(`-- ${employeeId}`));
        });
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);