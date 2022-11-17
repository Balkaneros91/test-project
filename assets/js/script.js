let result = 0;
let targNr = document.getElementById('targ-Nr').value;
let chances = document.getElementById('chances').innerText;

document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'submit') {
                /* alert('You roll the dice!'); */
                rollDice();
                checkOutcome();
            } else if (this.getAttribute('data-type') === 'reset') {
                /* alert('GAME OVER - GAME RESET!'); */
                window.location.reload(true);
            } else {
                let targNr = this.getAttribute('data-choice');
                /* console.log(targNr); */
                /* alert(`You picked the target number ${targNr}!`); */
                document.querySelector("#targ-Nr").innerHTML = `You choosen number  ${targNr}! Let's play :)`;
                document.getElementById("roll").disabled = false;
            }
        });
    }
    /*rollDice('6');*/

});


let dice = document.querySelectorAll('img');
/* console.log(dice); */

/**
 * 
 */
function rollDice() {
    dice.forEach(function (die) {
        die.classList.add("shake");
    });
    setTimeout(function () {
            dice.forEach(function (die) {
                die.classList.remove("shake");
            });

            let dieOneValue = Math.floor(Math.random() * 6) + 1;
            let firstDiceImage = "assets/images/dice" + dieOneValue + ".png";
            let dieTwoValue = Math.floor(Math.random() * 6) + 1;
            let secondDiceImage = "assets/images/dice" + dieTwoValue + ".png";
            /*console.log(dieOneValue, dieTwoValue);*/

            document.querySelector("#die1").setAttribute("src", firstDiceImage);
            document.querySelector("#die2").setAttribute("src", secondDiceImage);
            document.querySelector("#round-result").innerHTML = "Your roll is " + ((dieOneValue) + (dieTwoValue));
            result = document.getElementById('round-result').value;
        },
        2000
    );
}

/**
 * Gets the outcome of the throw 
 */
function checkOutcome() {
    let userThrow = parseInt(document.getElementById('round-result').value);
    /*console.log('userThrow');*/
    /*let calculateDice = checkOutcome();*/
    let isMatch = userThrow === result;
    let isNotMatch = userThrow !== result;

    if (isMatch === targNr) {
        alert(`You throw ${targNr}! Congrats it's a match, reset and play again! :D`);
    } else if (isNotMatch !== targNr) {
        alert(`It's not a match. You have ${chances - 1} left!`);
        decrementChances();
    } else {
        (chances === result);
        alert("You run out chances, reset and play again!");
    }

    /*rollDice(); */
}

/**
 * Gets the total number of throws until the game ends
 */
function decrementChances() {

    chances = parseInt(document.getElementById('chances').innerText);
    document.getElementById('chances').innerText = --chances;

    /*for (let i = 0; i <= 5; i--)*/
}




/*
let images = ['dice1.png',
    'dice2.png',
    'dice3.png',
    'dice4.png',
    'dice5.png',
    'dice6.png'
];

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