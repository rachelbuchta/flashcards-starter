class Turn {
  constructor(guess, card) {
    this.guess = guess
    this.card = card
    // this.isCorrect = false
  }

  returnGuess = () => {
    return this.guess
  }

  returnCard = () => {
    // console.log(this.card)
    return this.card
  }

  evaluateGuess = () => {
    if (this.guess === this.card.correctAnswer) {
      return true
    }
    if (this.guess !== this.card.correctAnswer) {
      return false
    }

  }


  giveFeedback = () => {
    // console.log(this.evaluateGuess() ? 'correct!' : 'incorrect!')
    return this.evaluateGuess() ? 'correct!' : 'incorrect!'


  }
}



module.exports = Turn
