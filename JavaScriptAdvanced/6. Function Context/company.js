class Company {

    constructor() {
        this.departments = [];
    }

    addEmployee(name, salary, position, department) {

        if (!name || !position || !department || !salary || salary < 0) {
            throw new Error('Invalid input!');
        }

        this.departments.push({ name, salary, position, department });
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {

        const departmentsSalary = {};

        this.departments.forEach(employee => {

            if (!departmentsSalary.hasOwnProperty(employee.department)) {
                departmentsSalary[employee.department] = [];
            }

            departmentsSalary[employee.department].push(employee.salary);
        });

        const averageDepartmentsSalary = [];

        for (const key in departmentsSalary) {

            let averageSalary = departmentsSalary[key]
                .reduce((a, b) => a + b, 0) / departmentsSalary[key].length;

            let result = [key, averageSalary];
            averageDepartmentsSalary.push(result);
        }

        const bestSalaryDepartment = averageDepartmentsSalary.sort((a, b) => b[1] - a[1])[0];

        const output = [];

        if (bestSalaryDepartment) {
            
            output.push(`Best Department is: ${bestSalaryDepartment[0]}`);
            output.push(`Average salary: ${bestSalaryDepartment[1].toFixed(2)}`);

            const bestDepartmentEmployees = this.departments
                .filter(el => el.department === bestSalaryDepartment[0])
                .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));

            bestDepartmentEmployees.forEach(person => {
                output.push(`${person.name} ${person.salary} ${person.position}`);
            });
        }

        return output.join('\n');
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "dyer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
