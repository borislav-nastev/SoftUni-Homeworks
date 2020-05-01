function schoolGrades(data) {

    let students = data.slice();
    let studentsMap = new Map();

    for (let line of students) {

        line = line.split(" ");

        let student = line.shift();
        let grades = line.map(Number);

        if (!studentsMap.has(student)) {

            studentsMap.set(student, grades);

        } else {

            let currentGrades = studentsMap.get(student);
            let newGrades = currentGrades.concat(grades);
            studentsMap.set(student, newGrades);
        }
    }

    let studentsArray = [];

    for (let student of studentsMap) {
        studentsArray.push(student)
    }

    let sortedStudents = studentsArray.sort((a, b) => sumAverageGrade(a[1]) - sumAverageGrade(b[1]));

    for (let student of sortedStudents) {
        console.log(`${student[0]}: ${student[1].join(", ")}`);
    }

    function sumAverageGrade(grades) {

        return grades.reduce((a, b) => a + b, 0) / grades.length;
    }
}

schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);