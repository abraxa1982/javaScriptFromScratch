'use strict';

//Select Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1'); //schneller, gehen aber beide
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
//starting Conditions

let scores;
let currentScore;
let activePlayer;
let playing;

function init() {
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');
    document.getElementById(`current--0`).textContent = currentScore;
    document.getElementById(`current--1`).textContent = currentScore;
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    score0Element.textContent = 0;
    score1Element.textContent = 0;
    diceElement.classList.add('hidden');
}
init();

function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
}

btnRoll.addEventListener('click', function () {
    if (playing) {
        const diceRoll = Math.trunc(Math.random() * 6) + 1;
        diceElement.classList.remove('hidden');
        diceElement.src = `dice-${diceRoll}.png`;

        if (diceRoll !== 1) {
            currentScore += diceRoll;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function() {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 20) {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceElement.classList.add('hidden');
            playing = false;
        } else {
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', init);
