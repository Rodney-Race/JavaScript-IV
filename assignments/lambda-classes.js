// CODE here for your Lambda Classes
//Person Class/Base class
class Person {
    constructor(PersonAttr) {
        this.name = PersonAttr.name;
        this.age = PersonAttr.age;
        this.location = PersonAttr.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
      }
};

//Instructor Class
class Instructor extends Person {
    constructor(InstructorAttr) {
        super(InstructorAttr);
        this.specialty = InstructorAttr.specialty;
        this.favLanguage = InstructorAttr.favLanguage;
        this.catchPhrase = InstructorAttr.catchPhrase;
    }
    demo() {
        return `Today we are learning about ${subject}`;
        return `${student.name} recieves a perfect score on ${subject}`;
    }
};

//Student Class
class Student extends Person {
    constructor(StudentAttr) {
        super(StudentAttr);
        this.previousBackground = StudentAttr.previousBackground;
        this.className = StudentAttr.className;
        this.favSubjects = StudentAttr.favSubjects;
    }
    listSubjects() {
        return `${favSubjects}`;
    }
    PRAssignment() {
        return `${student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge() {
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
};

//Project Manager Class
class ProjectManager extends Instructor {
    constructor(ProjectManagerAttr) {
        this.gradClassName = ProjectManagerAttr.gradClassName;
        this.favInstructor = ProjectManagerAttr.favInstructor;
    }
    standUp() {
        return `${name} announces to ${channel}, @channel standUp times!`;
    }
    debugsCode() {
        return `${name} debugs ${student.name}'s code on ${subject}`;
    }
};


const fred = new Instructor({
    name: 'Sean',
    location: 'Colorado',
    age: 30,
    favLanguage: 'JavaScript, Python, Elm etc.',
    specialty: 'redux',
    catchPhrase: `Don't forget the homies`
});

const Sam = new Student({
    studentName: 'Sam',
    location: 'Texas',
    age: 24,
    previousBackground: 'Construction Worker',
    className: 'webpt9',
    favSubject: ['Html', 'CSS', 'Javascript']
});


  
const Bill = new ProjectManager({
    name: 'Bill',
    location: 'California',
    age: 37,
    favLanguage: 'Python',
    specialty: 'redux',
    gradClassName: `CS1`,
    catchPhrase: `Don't forget the homies`,
    favInstructor: `Sean`
});  