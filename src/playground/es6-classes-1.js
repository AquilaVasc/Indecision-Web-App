console.log('It is running');

class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreetting(){
        return `Hi I am ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += `He is major in ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person{
    constructor(name, age, location){
        super(name, age);
        this.location = location;
    }
    hasLocation(){
        return !!this.location;
    }
    getGreetting(){
        let greetting = super.getGreetting();
        if(this.hasLocation()){
            greetting += ` I'm visiting from ${this.location}`;
        }
        return greetting;
    }
}

const me = new Traveler('Aquila Vasconcelos', 21, 'Banabuiú');
console.log(me.getGreetting());

const other = new Traveler();
console.log(other.getGreetting());