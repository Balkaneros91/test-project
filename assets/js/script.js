document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'submit') {
                /* alert('You roll the dice!'); */
                rollDice();
            } else if (this.getAttribute('data-type') === 'reset') {
                /* alert('GAME OVER - GAME RESET!'); */
                resetGame();
            } else {
                let targNr = this.getAttribute('data-choice');
                /* console.log(targNr); */
                /* alert(`You picked the target number ${targNr}!`); */
                document.querySelector("#targ-Nr").innerHTML = `Your target number is ${targNr}! Let's play :)`
            }
        });
    }
    rollDice('6');
});

let images = ['dice1.png',
    'dice2.png',
    'dice3.png',
    'dice4.png',
    'dice5.png',
    'dice6.png'
];

let dice = document.querySelectorAll('img');
/* console.log(dice); */

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

function rollDice(targNr) {
    dice.forEach(function (die) {
        die.classList.add("shake");
    });
    setTimeout(function () {
            dice.forEach(function (die) {
                die.classList.remove("shake");
            });
            let dieOneValue = Math.floor(Math.random() * 6);
            let firstDiceImage = "assets/image/dice" + dieOneValue + ".png";
            let dieTwoValue = Math.floor(Math.random() * 6);
            let secondDiceImage = "assets/images/dice" + dieTwoValue + ".png";
            /* console.log(dieOneValue, dieTwoValue); */
            document.querySelector("#die1").setAttribute("src", images[dieOneValue]);
            document.querySelector("#die2").setAttribute("src", images[dieTwoValue]);
            document.querySelector("#round-result").innerHTML = "Your roll is " + ((dieOneValue + 1) + (dieTwoValue + 1));
        },
        1000
    );
}

/**
 * Gets the outcome of the throw 
 */
function checkOutcome() {
    let userThrow = document.querySelector('#round-result').innerHTML.valueOf;
    /* console.log('userThrow'); */

}

/**
 * Gets the total number of throws until the game ends
 */
/*function decrementChances ()
/**
 * Resets the game 
 */
/*function restartGame ()





/*
let images = ["dice-01.svg",
"dice-02.svg",
"dice-03.svg",
"dice-04.svg",
"dice-05.svg",
"dice-06.svg"];
let dice = document.querySelectorAll("img");

function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6);
        let dieTwoValue = Math.floor(Math.random()*6);
        console.log(dieOneValue,dieTwoValue);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#total").innerHTML = "Your roll is " + ( (dieOneValue +1) + (dieTwoValue + 1) );
    },
    1000
    );
}
roll();

*/

/*
// Get the rand.nr dice1 - dice6
let dieOneValue = Math.floor(Math.random()*6) +1;
let firstDiceImage = "./assets/images/dice" + dieOneValue + ".png";
*/