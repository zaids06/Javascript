'use strict';
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let randNumber = 0;
let player1 = true;
let currentScore = 0;
let finalScore1 = 0;
let finalScore2 = 0;

const docQuery = str => document.querySelector(str);
const score1 = docQuery('.score#score--0');
const score2 = docQuery('.score#score--1');
const rollDice = docQuery('.btn.btn--roll');
const imageDice = docQuery('.dice');
const selectPlayer1 = docQuery('.player--0');
const selectPlayer2 = docQuery('.player--1');
const currentScore1 = docQuery('#current--0');
const currentScore2 = docQuery('#current--1');
const holdScore = docQuery('.btn--hold');
const mainScore1 = docQuery('#score--0');
const mainScore2 = docQuery('#score--1');
let player1Lost = function () {
  selectPlayer1.classList.remove('player--active');
  selectPlayer2.classList.add('player--active');
  player1 = false;
  currentScore = 0;
  currentScore1.textContent = currentScore;
};
let player2Lost = function () {
  selectPlayer2.classList.remove('player--active');
  selectPlayer1.classList.add('player--active');
  player1 = true;
  currentScore = 0;
  currentScore2.textContent = currentScore;
};
let player1Roll = function (num) {
  currentScore += num;
  currentScore1.textContent = currentScore;
};
let player2Roll = function (num) {
  currentScore += num;
  currentScore2.textContent = currentScore;
};
let generateNumber = function () {
  randNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(randNumber);
  if (player1) {
    if (randNumber === 1) player1Lost();
    else player1Roll(randNumber);
  } else {
    if (randNumber === 1) player2Lost();
    else player2Roll(randNumber);
  }
};
let totalScore = function () {
  if (player1) {
    finalScore1 += currentScore;
    console.log(finalScore1);
    mainScore1.textContent = finalScore1;
    if(finalScore1===100)
      selectPlayer1.classList.add('player--winner ');
    player1Lost();
  } else {
    finalScore2 += currentScore;
    console.log(finalScore2);
    mainScore2.textContent = finalScore2;
    player2Lost();
  }
};
score1.textContent = scorePlayer1;
score2.textContent = scorePlayer2;
imageDice.classList.add('hidden');
rollDice.addEventListener('click', generateNumber);
holdScore.addEventListener('click',totalScore);
