// let markValue;
// let johnValue;
// let massMark = 80;
// let massJohn=75;
// let heightMark =175;
// let heightJohn = 195;

// markValue = massMark/(heightMark**2);
// johnValue = massJohn/(heightJohn**2);

// console.log(markValue);
// console.log(johnValue);

// let statusValue = markValue>johnValue;
// console.log(statusValue);


const bill = 275;
var tip = 0;

bill>=50 && bill<300 ? tip+=(bill/100)*15 : tip+= (bill/100)*20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`)