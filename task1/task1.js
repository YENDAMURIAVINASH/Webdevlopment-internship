function rollDice() {
    const userGuess = parseInt(document.getElementById("guess").value);
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 6) {
        alert("Please enter a number between 1 and 6.");
        return;
    }

    const diceNumber = Math.floor(Math.random() * 6) + 1;
    const diceImage = `images/dice${diceNumber}.png`;
    document.getElementById("dice").src = diceImage;

    const resultElement = document.getElementById("result");

    if (userGuess === diceNumber) {
        resultElement.textContent = `🎉 You guessed it right! You win! 🎉`;
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = `😢 You guessed ${userGuess}, but the dice rolled ${diceNumber}. Try again! 😢`;
        resultElement.style.color = "red";
    }
}
