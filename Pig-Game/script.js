'use strict';

// Elementler seçiliyor
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const dieceSrc = document.querySelector('.dice');

score0El.textContent='0';
score1El.textContent='0';
current0El.textContent='0';
current1El.textContent='0';
diceEl.classList.add('hidden');

let value=0;
let turnPlayer = 0;
document.querySelector('.btn--new').addEventListener('click',function(){
    score0El.textContent='0';
    score1El.textContent='0';
    current0El.textContent='0';
    current1El.textContent='0';
    diceEl.classList.add('hidden');
    value=0;
    turnPlayer=0;
});

    document.querySelector('.btn--roll').addEventListener('click',function(){
        let diecePoint = Math.floor(Math.random()*6)+1;
        diceEl.classList.remove('hidden');
        if(turnPlayer===0){
            switch(diecePoint){
                case 1:
                    dieceSrc.src = 'dice-1.png';
                    turnPlayer=1;
                    current0El.textContent='0';
                    value=0;
                    break;
                case 2:
                    dieceSrc.src='dice-2.png';
                    value=value+2;
                    current0El.textContent=value;
                    break;
                case 3:
                    dieceSrc.src='dice-3.png'
                    value=value+3;
                    current0El.textContent=value;
                    break;
                case 4:
                    dieceSrc.src='dice-4.png';
                    value=value+4;
                    current0El.textContent=value;
                    break;
                case 5:
                    dieceSrc.src='dice-5.png';
                    value=value+5;
                    current0El.textContent=value;
                    break;
                case 6:
                    dieceSrc.src='dice-6.png';
                    value=value+6;
                    current0El.textContent=value;
                    break;
            };
        }
        else{

            switch(diecePoint){
                case 1:
                    dieceSrc.src = 'dice-1.png';
                    turnPlayer=0;
                    current1El.textContent='0';
                    value=0;
                    break;
                case 2:
                    dieceSrc.src='dice-2.png';
                    value=value+2;
                    current1El.textContent=value;
                    break;
                case 3:
                    dieceSrc.src='dice-3.png'
                    value=value+3;
                    current1El.textContent=value;
                    break;
                case 4:
                    dieceSrc.src='dice-4.png';
                    value=value+4;
                    current1El.textContent=value;
                    break;
                case 5:
                    dieceSrc.src='dice-5.png';
                    value=value+5;
                    current1El.textContent=value;
                    break;
                case 6:
                    dieceSrc.src='dice-6.png';
                    value=value+6;
                    current1El.textContent=value;
                    break;
            };
        };
    });

    document.querySelector('.btn--hold').addEventListener('click',function(){
        if(turnPlayer===0){
            score0El.textContent=Number(score0El.textContent)+value;
            if (Number(score0El.textContent) > 100){
                document.getElementById('name--0').textContent='🥇Winner';
                document.getElementById('name--1').textContent='🥈Second';
            }
            else{
                current0El.textContent='0';
                turnPlayer=1;
                value=0;
            }
        }
        else if(turnPlayer===1){
            score1El.textContent=Number(score1El.textContent)+value;
            if (Number(score1El.textContent) > 100){
                document.getElementById('name--1').textContent='🥇 Winner';
                document.getElementById('name--0').textContent='🥈Second';
            }
            else{
                current1El.textContent='0';
                turnPlayer=0;
                value=0;
            }
        }
    });

 
   

