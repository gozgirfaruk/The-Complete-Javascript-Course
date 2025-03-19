'use strict'

//console.log(document.querySelector('.message').textContent);
//document.querySelector('.message').textContent= '✅ Correct Number';

let score = 20;
let number = Math.floor(Math.random()*20)+1;
let highScore = 0;

//document.querySelector('.number').textContent=number;

document.querySelector('.check').addEventListener('click',function(){
const guess= Number(document.querySelector('.guess').value);
if(!guess){
    document.querySelector('.message').textContent='⛔ No Number!';
}
if(score>0){
     if(guess === number){
        document.querySelector('.message').textContent= '✅ Correct Number';
        document.querySelector('body').style.backgroundColor = '#589555';
        document.querySelector('.number').textContent=number;
    }
    else if(guess >number){
        document.querySelector('.message').textContent= 'High Guess';
        score--;
        document.querySelector('.score').textContent = score;
    }
    else if(guess<number){
        document.querySelector('.message').textContent= 'Low Guess';
        score--;
        document.querySelector('.score').textContent = score;
    }
}
else{
    document.querySelector('.message').textContent = '😥You Lost The Game!';
    document.querySelector('body').style.backgroundColor= '#d55252'
}
});


document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('body').style.backgroundColor = '#282c34';
    document.querySelector('.number').textContent = '?';
    if(score>highScore){
        highScore=score;
        document.querySelector('.highscore').textContent = highScore;
    }
    score=20;
    document.querySelector('.score').textContent = score;
    number = Math.floor(Math.random()*20)+1;
});

