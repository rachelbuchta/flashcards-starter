class Turn {
  constructor(guess, card) {
    this.guess = guess
    this.activeCard = card
    this.isCorrect = false
  }

  returnGuess = () => {
    return this.guess
  }

  returnCard = () => {
    return this.activeCard
  }

  evaluateGuess = () => {
    if (this.guess === this.activeCard.correctAnswer) {
      this.isCorrect = true
      return true
    }
    if (this.guess !== this.activeCard.correctAnswer) {
      this.isCorrect = false
      return false
    }
  }

  giveFeedback = () => {
    if (this.evaluateGuess()) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }

  }
}

module.exports = Turn