class OldSyntax {
    constructor(){
        this.name = 'aquila'
        //bind
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi my name is ${this.name}`;
    }
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(oldSyntax.getGreeting());
//In the old syntax if we want to get this running we would have to do da bind on the instance to this
console.log(getGreeting());

class NewSyntax {
    name = 'Jon'
    getGreeting = () =>{
        return `Hi my name is ${this.name}`;
    }
}
const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;

console.log(newSyntax);
console.log(newGetGreeting())