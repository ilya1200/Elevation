const Person = require("./person");

class Principal extends Person {
    constructor(name, startYear) {
        super(name, startYear);
        this.teachers = [];
        this.students = [];
    }

    hireTeacher(teacher) {
        this.teachers.push(teacher);

        console.log(`${this.name} just hired ${teacher.name}`)
    }

    recruitStudent(student) {
        this.students.push(student);
    }

    expelStudent(student) {
        const studentIndex = this.students.indexOf(student);

        if (studentIndex < 0) {
            throw Error(`No such student as ${student.name}`);
        }
        this.students.splice(studentIndex, 1);
    }

    transferStudent(student, principal) {
        try {
            if(!principal){
                throw Error("No principal provided");
            }
            this.expelStudent(student);
        } catch (e) {
            throw e;
        }

        principal.recruitStudent(student);
    }
}

module.exports = Principal;