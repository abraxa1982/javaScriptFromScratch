'use strict';

/*
console.log(document.querySelector('.message').textContent);

displayMessage('Correct Number!';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);

*/

let secretNumber = Math.trunc(Math.random() * 20)+1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

    document.querySelector('.check')
    .addEventListener('click', function () {
        const guess = Number(document.querySelector('.guess').value);

        if(!guess) {
            displayMessage('Please Enter an Number');
        } else if(guess === secretNumber) {
            document.querySelector('.number').textContent = secretNumber;
            displayMessage('Correct Number!');

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem'
            if (highscore < score) {
                highscore = score;
                document.querySelector('.highscore').textContent = score;
            }
        } else if (guess !== secretNumber) {
            if (score >1 ) {
                displayMessage(guess > secretNumber ? 'Number to high' : 'Number to low!');
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                displayMessage('You lost the Game');
                document.querySelector('.score').textContent = 0;
            }
        }
    });

document.querySelector('.again')
    .addEventListener('click', function () {
        secretNumber = Math.trunc(Math.random() * 20)+1;
        score = 20;
        displayMessage('Start guessing...');
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';

        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem'
    });
