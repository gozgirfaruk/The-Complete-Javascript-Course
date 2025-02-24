'use strict'

//  // FOR OF
 const movements= [300,-100,150,200,600,-650];

 for(const movement of movements){
   if(movement>0){
       console.log(`You deposite ${movement}`);
   }else{
       console.log(`You withdrew ${movement}`);
   }
 };


//  console.log(`---------------------0----------------------------`);
 
//  //FOREACH
 movements.forEach(function(movement){
   if(movement>0){
       console.log(`You deposite with Foreach ${movement}`);
   }else{
       console.log(`You withdrew with Foreach ${movement}`);
   }
 });


 const currencies = new Map(
    [
        ['USD','United States dollar'],
        ['EUR','Euro'],
        ['GBP','Pound sterling'],
        ['TL','Turkish Lira']
    ]
);

currencies.forEach(function(value,key,map){
    console.log(`${key}:${value}`);
});


/////////////////////////////////////

 for(const movement of movements){
   if(movement>0){
       console.log(`You deposite ${movement}`);
   }else{
       console.log(`You withdrew ${movement}`);
   }
 };

//  console.log(`---------------------0----------------------------`);
 
 //FOREACH
 movements.forEach(function(movement){
   if(movement>0){
       console.log(`You deposite with Foreach ${movement}`);
   }else{
       console.log(`You withdrew with Foreach ${movement}`);
   }
 });

currencies.forEach(function(value,key,map){
    console.log(`${key}:${value}`);
});



const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);
    // dogsJulia.slice(1, 3);
    const dogs = dogsJuliaCorrected.concat(dogsKate);
    console.log(dogs);
  
    dogs.forEach(function (dog, i) {
      if (dog >= 3) {
        console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
      } else {
        console.log(`Dog number ${i + 1} is still a puppy 🐶`);
      }
    });
  };
  // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
  checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
  
  const euroToUsd = 1.1;
  
  //const movements= [300,-100,150,200,600,-650];
  // First away
  const movementUSD= movements.map(function(mov){
    return mov * euroToUsd;
  });
  console.log(movementUSD);
  // Second away
  const movementUSDfor=[];
  for(const mov of movements){
    movementUSDfor.push(mov*euroToUsd);
  };
  console.log(movementUSDfor);
  
  const movementUSDarrow= movements.map(mov=>mov*euroToUsd);
  console.log(movementUSDarrow);
  
  const movementsDescriptions = movements.map(
    (mov, i) =>
      `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
        mov
      )}`
  );
  console.log(movementsDescriptions);


 const deposits= movements.filter(function(mov){
    return mov>0;
  });
  console.log(movements);
  console.log(deposits);
  
  const withdrewals= movements.filter(mov=>mov<0);
  console.log(withdrewals);

  const reduceFunc = movements.reduce(function(x,total){
   if(x>0){
    total+=x;
   }else{
    total-=x;
   }
   return total;
  });
  console.log(reduceFunc);
  
  // const movements= [300,-100,150,200,600,-650];
  // Maximum value
  const max = movements.reduce((acc,mov)=>{
    if(acc>mov){
        return acc;
    }else{
        return mov
    }
  },movements[0]);
  console.log(max);

  const totalDepositsUSD=movements
  .filter(mov=>mov>0)
  .map(mov=>mov*euroToUsd)
  .reduce((acc,mov)=>acc+mov,0);
 console.log(totalDepositsUSD);

 
 const firstWithdrawal= movements.find(mov =>mov <0);
 console.log(movements);
 console.log(firstWithdrawal);

 const person1= {
  name : 'ABC',
  surname:'D',
  id:1211,
  pin:[15,17,19,21,23]
 };
 const person2= {
  name : 'OFG',
  surname:'0007BOND',
  id:1211,
  pin:[15,17,19,21,23]
 };
 const person3= {
  name : 'QWERT',
  surname:'TYU',
  id:1211,
  pin:[15,17,19,21,23]
 };

const persons = [person1,person2,person3];

console.log(persons);
const person = persons.find(acc => acc.name==='OFG');
console.log(person);

 const arr = [[1,2,3],[4,5,6],[7,8,9],0];
 console.log(arr.flat());

 const arrdeep = [[1,2,3],[4,5,6],[[7,8],9],0];
 console.log(arr.flatMap(mov=>mov));
 console.log(arr.flat(2));
 
 const owners =['Jonas','Jack','Adam','Martha'];
 console.log(owners.sort());
 console.log(owners);


 // Sort ana dizinin üzerine uygulandığı zaman köklü değiliklik yapar
 console.log(movements.sort());
console.log(movements);
// Slice ile görüntüsünü alıp görüntü üzerinde sıralama yapabiliriz.

console.log(movements.slice().reverse());

console.log(movements);

const groupedMovements = Object.groupBy(movements,movement => 
  movements> 0 ?'Deposits':'Withdrews');
  console.log(groupedMovements);


  const xArray = new Array(7);
  xArray.push('Hamilton');
  xArray.push('Leclerc');
  xArray.unshift('Verstappen');
  xArray.fill(17,1,8);
console.log(xArray);
  
