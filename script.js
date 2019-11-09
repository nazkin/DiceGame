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
var diceRoll; 

//********************************DOM manipulations 
var diceObj = document.querySelector('.dice');

document.querySelector("#current-0").textContent = "0";
document.querySelector("#current-1").textContent = "0";
document.querySelector("#score-0").textContent = "0";
document.querySelector("#score-1").textContent = "0";
diceObj.style.display = 'none';

//Event handler for the 'Roll' button
var rollBtn = document.querySelector('.btn-roll');

rollBtn.addEventListener('click', function() {
    // Random number for the diceroll 
        diceRoll = Math.floor((Math.random()*6) + 1);
    //Connect the random number to our dicephotos to display the right dice and change img
        diceObj.style.display = "block";
        diceObj.src = "./photos/dice-" + diceRoll + ".png";
    //Update the round-score if the the dice roll is more than 1 and switch player when 1 is rolled
    if(diceRoll > 1){
        //sum up your round score 
        roundScore += diceRoll;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
    }
    else {
        //Clear the score for that round 
        roundScore = 0;
        document.querySelector('#current-' + activePlayer).textContent = "0"; 
        //Next player - toggle the active class to so that the styling changes as well
        if(activePlayer === 0){
            activePlayer = 1;

            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.add('active');
        }
        else {
            activePlayer = 0;

            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
        }

        
    }    
});

