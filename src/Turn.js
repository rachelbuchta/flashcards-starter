class Turn {
  constructor(guess, card) {
    this.guess = guess
    this.card = card
    this.isCorrect = false
  }

  returnGuess() {
    return this.guess
  }

  returnCard() {
    return this.card
  }

  evaluateGuess() {
    return this.returnGuess() === this.card.correctAnswer ? true : false
  }

  giveFeedback() {
    return this.evaluateGuess() ? 'correct!' : "incorrect!"
  }
}

module.exports = Turn