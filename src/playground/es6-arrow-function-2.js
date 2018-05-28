//arguments object - no longer bound with arrow functions
const add = function (a, b){
    console.log(arguments);
    return a + b;
} 

//that bellow is going to get you an error

const addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
}



console.log(add(50, 1));

//this keywornd - no longer bound with arrow functions

const user = {
    name: 'Aquila',
    cities: ['Banabuiú', 'Quixadá'],
    printPlacesLived(){
        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        });
        return cityMessages;
    }
};

console.log(user.printPlacesLived());