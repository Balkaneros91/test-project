let dice = document.querySelectorAll('img');

document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'submit') {
                rollDice();
            } else if (this.getAttribute('data-type') === 'reset') {
                window.location.reload(true);
            } else {
                let targNr = this.getAttribute('data-choice');
                document.getElementById("targ-Nr").innerHTML = targNr;

                /*let num6 = document.getElementById('control-6');
                let num7 = document.getElementById('control-7');
                let num8 = document.getElementById('control-8');
                let num9 = document.getElementById('control-9');

                if (num6 === targNr) {
                    num7 = 'disabled';
                    num8 = 'disabled';
                    num9 = 'disabled';
                } else {
                    'enable';
                }

                /*if (this.getAttribute('data-choice').value === ('targNr').textContent) {
                    document.getElementsByClassName('btn').disabled = true;
                } else {
                    document.getElementsByClassName('btn').disabled = false;
                }*/
                document.getElementById("roll").disabled = false;
            }
        });
    }
});

function rollDice() {
    dice.forEach(function (die) {
        die.classList.add("shake");
    });

    let dieOneValue = Math.floor(Math.random() * 6) + 1;
    let firstDiceImage = "assets/images/dice" + dieOneValue + ".png";
    let dieTwoValue = Math.floor(Math.random() * 6) + 1;
    let secondDiceImage = "assets/images/dice" + dieTwoValue + ".png";

    document.querySelector("#die1").setAttribute("src", firstDiceImage);
    document.querySelector("#die2").setAttribute("src", secondDiceImage);

    setTimeout(function () {
        dice.forEach(function (die) {
            die.classList.remove("shake");
        });

    },
        500
    );
    document.querySelector("#round-result").innerHTML = ((dieOneValue) + (dieTwoValue));
    checkOutcome();

}

function checkOutcome() {

    let result = parseInt(document.getElementById('round-result').textContent);
    let targNr = parseInt(document.getElementById('targ-Nr').textContent);

    let isMatch = result === targNr;
    /*console.log({ isMatch, result, targNr });*/

    if (isMatch) {
        document.getElementById('message').textContent = ("A match! You won!");
        document.getElementById("roll").disabled = true;
        decrementChances();
        /*alert(`You throw ${targNr}! Congrats it's a match, reset and play again! :D`);*/
    } else if (!isMatch) {
        /*alert(`It's not a match. You have ${chances - 1} left!`);*/
        decrementChances();
    } else {
        alert("Hi there!");
    }
}

function decrementChances() {

    let chances = parseInt(document.getElementById('chances').textContent);
    document.getElementById('chances').innerText = --chances;

    if (chances === 0) {
        document.getElementById("roll").disabled = true;
        document.getElementById('message').textContent = ('Game Over!');
    } else {
        /*alert('roll again!')*/
    }
}