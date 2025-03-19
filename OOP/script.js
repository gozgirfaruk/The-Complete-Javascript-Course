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

Person.prototype.species = 'Homo Sapiens';
console.log(matilda);
console.log(jonas);

console.log(jonas.hasOwnProperty('firstName'));

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3,4,5,6,7,8,9,3,1]; // new Array ===[]
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function(){
     return [...new Set(this)];
};
console.log(arr.unique());

// class expression
// const PersonCl = clas{}

// class decleration
class PersonCl {
    constructor(firstName,birthYear){
        this.firstName = firstName;
        this.birthYear=birthYear;
    }
    calcAge(){
        console.log(2025-this.birthYear);
    }
    get age(){
        return 2085-this.birthYear;
    }
};
const jessica =new PersonCl('Jessica',1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

// GETTER AND SETTER
const account={
    owner:'Smith',
    movements:[200,300,210,120],

    get latest (){
        return this.movements.slice(-1).pop();
    },
    set latest(mov){
        this.movements.push(mov);
    }
};
console.log(account.latest);
account.latest=50;
console.log(account.movements);

const PersonProto = {
    calcAge(){
        console.log(2025-this.birthYear);
    },

    init(firstName,birthYear){
        this.firstName=firstName;
        this.birthYear=birthYear;
    }
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear=2000;
steven.calcAge();

console.log(steven.__proto__);

const sarah = Object.create(PersonProto);
sarah.init('Sarah',2001);
sarah.calcAge();
const Student = function(firstName, birthYear, course){
    Person.call(this,firstName,birthYear);
    this.course=course;
}
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce=function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike',2020,'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);

class StudentCl  extends PersonCl{
    constructor(firstName,birthYear,course){
        super(firstName,birthYear)
        this.course=course;
    }
    introduce(){
        console.log(`My name is ${this.firstName} and I study ${this.course}`);
    }

    calcAge(){
        console.log(`I'm ${2025-this.birthYear} years old.`)
    }
}

const martha = new StudentCl('Martha Jones',2012,'Computer Science');
martha.introduce();
martha.calcAge();

class Account {
    locale = navigator.language;
    bank = 'Bankist';
    // private
    #movements = [];
    constructor (owner, currency,pin){
        this.owner=owner;
        this.currency=currency;
        this.pin=pin;
    }
}

const acc1 = new Account('Gozegir','TL',1111);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-70);
console.log(acc1);

