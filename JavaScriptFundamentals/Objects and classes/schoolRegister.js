function schoolRegister(students) {

    let grades = {};

    for (let line of students) {
        let [name, grade, score] = line.split(", ");

        name = name.split(": ")[1];
        grade = grade.split(": ")[1];
        score = score.split(": ")[1];

        if (score >= 3) {
            let currentStudent = [name, score];

            if (!grades.hasOwnProperty(grade)) {
                grades[grade] = [];
            }

            grades[grade].push(currentStudent);
        }
    }

    let sortedGrades = Object.keys(grades).sort((a,b) => a - b);

    for (let grade of sortedGrades) {

        console.log(`${++grade} Grade`);

        let gradeStudents = [];
        let averageScore = 0;

        for (let student of grades[--grade]) {
            gradeStudents.push(student[0]);
            averageScore += Number(student[1]);
        }

        console.log(`List of students: ${gradeStudents.join(", ")}`);
        console.log(`Average annual grade from last year: ${(averageScore / gradeStudents.length).toFixed(2)}\n`);
    }
}

schoolRegister(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]);