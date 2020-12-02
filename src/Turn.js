class Turn {
  constructor(guess, card) {
    this.guess = guess
    this.card = card
    this.isCorrect = false
  }

  returnGuess = () => {
    return this.guess
  }

  returnCard = () => {
    return this.card
  }

  evaluateGuess = (guess) => {
    if (guess === this.card.correctAnswer) {
      this.isCorrect = true
    }
    return this.isCorrect
  }

  giveFeedback = () => {
    return this.isCorrect ? 'correct!' : 'incorrect!'
  }
}



module.exports = Turn
