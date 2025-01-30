"use strict";

// // FUNCTION DECLERATION
function calcAge(birthYear) {
  return 2025 - birthYear;
}
console.log(calcAge(2000));

// // FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};
console.log(calcAge2(1998));

// // ARROW FUNCTION
const calcAge3 = (birthYear) => 2020 - birthYear;
console.log(calcAge3(2001));

// // EXAMPLE ARROW FUNCTION
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(2000, "Ömer Faruk"));

// CHALLENGE #5
function calcAverage(score1, score2, score3) {
  var teamScore = (score1 + score2 + score3) / 3;
  return teamScore;
}
var scoreDolphins = calcAverage(44, 23, 71);
var scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolpins, avgKoalas) {
  if (avgDolpins > avgKoalas) {
    console.log(`Dolphins win (${avgDolpins} vs ${avgKoalas})`);
  } else if (avgDolpins == avgKoalas) {
    console.log("No team wins...");
  } else {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolpins})`);
  }
}

checkWinner(scoreDolphins, scoreKoalas);

// ARRAYS
const friend = ["Micheal", "Steven", "Peter"];
console.log(friend);

const years = new Array(1997, 2000, 2004);
console.log(years);
console.log(friend[1]);
console.log(friend[friend.length - 1]);

const jonas = ["Paul", "Mark", 2007, friend, years];
console.log(jonas);

// LOOPS

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Chicken Chicken Dinner Chicken ${rep} 🏋️‍♂️`);
}

let rep = 0;
while (rep < 10) {
  rep++;
  console.log(`${rep}`);
}
