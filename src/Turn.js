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
        // console.log(this.isCorrect)
    }
    console.log(this.isCorrect)
    return this.isCorrect

  }

  giveFeedback = () => {
    // console.log(this.isCorrect)
    console.log(this.isCorrect ? 'correct!' : 'incorrect!')
    return this.isCorrect ? 'correct!' : 'incorrect!'
  }
}



module.exports = Turn
