const Person = require("./person");

class Teacher extends Person {

    constructor(name, startYear, salary) {
        super(name, startYear);
        this.salary = salary;
        this.courses = {};
    }

    giveGrade(student, courseName, grade) {
        student.receiveGrade(courseName, grade);
    }

    addCourse(course) {
        if (this.courses[course]) {
            this.courses[course] += 1;
        }else{
            this.courses[course] = 1;
        }
    }
}

module.exports = Teacher;