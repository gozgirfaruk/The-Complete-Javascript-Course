// CHALLENGE #1

const Car = function(make,speed){
    this.make=make;
    this.speed=speed;
};

Car.prototype.accelerate = function(){
    this.speed +=10;
    console.log(`${this.make} is going at ${this.speed} km/h`)
};
Car.prototype.brake = function(){
    this.speed -=5;
    console.log(`${this.make} is going at ${this.speed} km/h`)
};

const bmw = new Car('BWM',120);
const mercedes = new Car('Mercedes',110);
bmw.accelerate();
bmw.brake();

// CHALLENGE #2
class CarCl{
    constructor(make,speed){
        this.make=make;
        this.speed=speed;
    }

    accelerate(){
        this.speed +=10;
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }
    brake(){
        this.speed -=5;
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }
    get speedUS(){
        return this.speed /1.6;
    }
    set speedUS(speed){
        this.speed = speed*1.6;
    }
}
const ford = new CarCl('Ford',150);
console.log(ford.speedUS);
ford.accelerate();
ford.brake();