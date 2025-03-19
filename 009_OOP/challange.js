
// CHALLENGE #1
{
    const Car = function(make,speed){
        this.make=make;
        this.speed=speed;
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
        
    };
}
// CHALLENGE #2
{
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
}
// CHALLENGE #3
{
    const Car = function(make,speed){
        this.make=make;
        this.speed=speed;
    };
    Car.prototype.accelerate = function(){
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    };
    Car.prototype.brake=function(){
        this.speed -=5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    };
    const EV = function(make,speed,charge){
        Car.call(this, make,speed)
        this.charge=charge
    }
    // Link the prototypes
    EV.prototype = Object.create(Car.prototype);
    EV.prototype.chargeBattery = function(chargeTo){
        this.charge = chargeTo;
    };
    EV.prototype.accelerate = function(){
        this.speed += 20;
        this.charge--;
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`);
    }
    const tesla = new EV('Tesla',120,23);
    tesla.chargeBattery(90);
    console.log(tesla);
    tesla.brake();
    tesla.accelerate();
}
