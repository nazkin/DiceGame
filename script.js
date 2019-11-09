//Goal of the game is to get to 100 points first
//Player can roll as many times per round as he wishes
//If a player rolls a 1, all of the points gained that round are lost.
// Next players turn happens when: a)Player rolls a 1 b) Player chooses to stop rolling('HOLD') the dice for that round


//Create an array to maintain scores for both players 
var finalScore = [0,0];
//Create one variable to maintain the score for each round
var roundScore = 0;
//Active player 0 - "player 1" and 1- "player 2" --> it will also be used to control the active player 
var activePlayer = 0;
//diceRoll variable keeps track of a random number rolled between 1 and 6 representing the dice roll
var diceRoll = Math.floor((Math.random()*6) + 1);

//DOM manipulations 
document.querySelector("#current-" + activePlayer).textContent = diceRoll;

document.querySelector('.dice').style.display = "none";