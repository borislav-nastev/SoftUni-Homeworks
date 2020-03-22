function printStudentInfo(name, age, grade) {

    return `Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`;
}

console.log(printStudentInfo('John', 15, 5.54678));