'use strict'

// Constructor
const Person = function(firstName,birthYear){
    // Instance properties
        this.firstName=firstName;
        this.birthYear=birthYear;
};

const jonas=  new Person('Jonas',1991);
const matilda = new Person('Matilda',2005);
console.log(matilda,jonas);

console.log(jonas instanceof Person);


// Prototypes
Person.prototype.calcAge = function(){
    console.log(2025-this.birthYear);
};
console.log(Person.prototype);
jonas.calcAge();
console.log(jonas.__proto__);

Person.prototype.species = 'Homo Sapiens';
console.log(matilda);
console.log(jonas);



