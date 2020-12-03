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
    if (this.guess === this.card.correctAnswer) {
      this.isCorrect = true
      return true
    }
    if (this.guess !== this.card.correctAnswer) {
      this.isCorrect = false
      return false
    }
  }

  giveFeedback() {
    if (this.evaluateGuess()) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }
}

module.exports = Turn
