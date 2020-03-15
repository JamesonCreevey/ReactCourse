class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students=[]) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentToRegister) {
        if(this.students.includes(studentToRegister)) {
            console.log("Already Registered");
        } else {
        this.students.push(studentToRegister);
        console.log(`Registering ${studentToRegister.email} to the bootcamp ${this.level}`);
        }
    }
}

const Nucamp = new Bootcamp("Nucamp", "React");
const OtherCamp = new Bootcamp("OtherCamp", "JS");

const Jameson = new Student("Jameson Creevey", "jcreevey@yahoo.com", "Detroit");
const Phil = new Student("Phil Jones", "Phil@nucamp.com", "Detroit");

Nucamp.registerStudent(Jameson);
Nucamp.registerStudent(Phil);

console.log(Nucamp);