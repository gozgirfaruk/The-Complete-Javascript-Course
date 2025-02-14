'use strict'

const bookings=[];

const createBooking = function(flightNum,numPassangers=1,price=199){
    // numPassangers = numPassangers ||1;
    // price = price ||199;
    const booking = {
        flightNum,
        numPassangers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LM123');
createBooking('KOC1001',1,250);
createBooking('KOC01',undefined,150);


const great = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    };
};
const greatHey = great('Hey');
greatHey('Omar');
great('Hello')('Faruk');