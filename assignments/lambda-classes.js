// CODE here for your Lambda Classes
//Person Class/Base class
class Person {
    baseClass(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
      }
}

//Instructor Class
class Instructor extends Person {
    constructor(name, age, location, specialty, favLanguage, catchPhrase) {
        super(name, age, location);
        this.specialty = specialty;
        this.favLanguage = language;
        this.catchPhrase = catchPhrase;
    }
    
}
