function rollDie() {
	var startingBet = document.forms["game"]["startingBet"].value;
	var bet = startingBet;
	var dice1 = Math.floor(Math.random() * 6) + 1;
	var dice2 = Math.floor(Math.random() * 6) + 1;
	var diceRoll = dice1 + dice2;
	var betsArray = [];
	
	if (startingBet == "" || isNaN(startingBet) || startingBet < 0) {
		alert("Your Starting Bet must be greater than 0")
	}
	while (bet > 0) {
		if(diceRoll != 7) {
			bet -= 1
		} else {
			bet += 4
		}
		betsArray.push(bet)
	}
   document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Play Again";
   document.getElementById("originalBet").innerText = Number(bet);
}