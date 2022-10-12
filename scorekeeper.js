const btn1 = document.querySelector('#p1button');
const btn2 = document.querySelector('#p2button');
const reset = document.querySelector('#reset');
const score1= document.querySelector('#p1score');
const score2= document.querySelector('#p2score');

let scoreOf1= 0;
let scoreOf2= 0;
let winningScore= 5;
let isGameOver = false;

btn1.addEventListener('click', ()=>{
    if(!isGameOver){
        scoreOf1 += 1;
    if (scoreOf1 == winningScore){
        isGameOver= true;}
    score1.textContent = scoreOf1;}
})

btn2.addEventListener('click', ()=>{
    if(!isGameOver){
        scoreOf2 += 1;
    if (scoreOf2 == winningScore){
        isGameOver= true;}
    score2.textContent = scoreOf2;}
})

reset.addEventListener('click', ()=> {
    isGameOver = false;
    scoreOf1 = 0;
    scoreOf2 = 0;
    score1.textContent= 0;
    score2.textContent= 0;
})