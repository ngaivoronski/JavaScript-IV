// CODE here for your Lambda Classes


// PERSON


class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

const fred = new Person ({
    name: "Fred",
    age: "35",
    location: "New York",
})

const mike = new Person ({
    name: "Mike",
    age: "40",
    location: "Ohio",
})

fred.speak();
mike.speak();


// STUDENT


class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = Math.round(Math.random()*100);
    }
    listsSubjects() {
        var x;
        console.log(`Here are ${this.name}'s favorite subjects:`);
        for (x in this.favSubjects) {
            console.log(this.favSubjects[x]);
        }
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
    graduate(graders) {
        while (true) {
            // Display current grade
            console.log(`${this.name}'s current overall grade is ${this.grade}.`)

            // Select a grader at random from the provided list of graders
            var grader = graders[Math.floor(Math.random()*graders.length)];

            // Student graduates if he's at 70 or above
            if (this.grade >= 70) {
                console.log(`Congratulations, ${this.name}! Your overall grade is ${this.grade}, you have successfully graduated.`)
                break;
            }

            // If student hasn't graduated, grader grades his work and adds or subtracts from his grade
            grader.addGrade(this);
        }
        
    }
}

const rob = new Student ({
    name: "Rob",
    age: "22",
    location: "Florida",
    previousBackground: "Carpenter",
    className: "Web24",
    favSubjects: ["HTML", "JavaScript", "REACT"],
})

const mitch = new Student ({
    name: "Mitch",
    age: "70",
    location: "Nevada",
    previousBackground: "CIA",
    className: "Web24",
    favSubjects: ["JavaScript", "Node.js"],
})

rob.speak();
rob.listsSubjects();
rob.PRAssignment("CSS");
rob.sprintChallenge("CSS");
mitch.speak();
mitch.listsSubjects();
mitch.PRAssignment("JavaScript");
mitch.sprintChallenge("JavaScript");


// INSTRUCTOR


class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`)
    }
    addGrade(student) {

        // Determine a random number from -30 to 30
        var addedGrade = Math.round((Math.random() - 0.5) * 60);

        // Add (or subtract) that number from the student's overall grade
        student.grade += addedGrade;

        // Display on the console what was added or subtracted
        if (addedGrade > 0) {
            console.log(`${this.name} has graded ${student.name}'s work and adds ${addedGrade} points to his overall grade.`);
        }
        else if (addedGrade < 0) {
            console.log(`${this.name} has graded ${student.name}'s work and subtracts ${addedGrade} points from his overall grade.`);
        }
        else {
            console.log(`${this.name} has graded ${student.name}'s work and adds no points from his overall grade.`);
        }

        // Return the student object with the updated grade value
        return student;
    }
}

const bob = new Instructor ({
    name: "Bob",
    age: "25",
    location: "Texas",
    specialty: "REACT",
    favLanguage: "JavasScript",
    catchPhrase: "Fail faster!",
})

const ed = new Instructor ({
    name: "Ed",
    age: "33",
    location: "Iowa",
    specialty: "Node.ja",
    favLanguage: "JavasScript",
    catchPhrase: "Everyone's an impostor.",
})

bob.speak();
bob.demo("CSS");
bob.grade(rob, "CSS");
ed.speak();
ed.demo("JavaScript");
ed.grade(mitch, "JavaScript");


// PROJECT MANAGER


class ProjectManager extends Instructor {
    constructor (attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standup(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy time!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

const matt = new ProjectManager ({
    name: "Matt",
    age: "39",
    location: "Israel",
    specialty: "CSS",
    favLanguage: "CSS",
    catchPhrase: "Mazeltov!",
    gradClassName: "Web1",
    favInstructor: "Bob",
})

matt.speak();
bob.demo("HMTL");
matt.standup("Web24_Lecture");
matt.debugsCode(rob, "CSS");

rob.graduate([bob,ed,matt]);