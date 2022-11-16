

/*
let images = "./assets/images/dice";
let images = ["dice1.png",
"dice2.png",
"dice3.png",
"dice4.png",
"dice5.png",
"dice6.png"];
let dice = document.querySelectorAll("img");

/*console.log(dice);*/
/*
function roll() {
    dice.forEach(function(die) {
        die.classList.add("shake");
    });
    setTimeout(function() {
        dice.forEach(function(die) {
            die.classList.remove("shake");
        });

        // Generate a rand.nr 1-6
        let dieOneValue = Math.floor(Math.random()*6) +1;
        let dieTwoValue = Math.floor(Math.random()*6) +1;
        console.log(dieOneValue,dieTwoValue);
        
        document.getElementById("die-1").setAttribute("src", images[dieOneValue]);
        document.getElementById("die-2").setAttribute("src", images[dieTwoValue]);
        document.getElementById("round-result").innerHTML = ( (dieOneValue) + (dieTwoValue) );
        
    },
    1000
    );
}
roll();
*/
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

