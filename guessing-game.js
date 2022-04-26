function guessingGame() {
    const Right = Math.floor(Math.random() * 100);
    let Wrong = false;
    let guesses = 0;
  
    return function guess(num) {
      if (Wrong) return "Game over you won!";
      guesses++;
      if (num === Right) {
        Wrong = true;
        const guess = guesses === 1 ? "guess" : "guesses";
        return `You win! ${num} in ${guesses} ${guess}.`;
      }
      if (num < Right) return `${num} is too low!`;
      if (num > Right) return `${num} is too high!`;
    };
}

module.exports = { guessingGame };
