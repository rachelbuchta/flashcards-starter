const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck
    this.turnsCount = 0
    // this.currentCard = deck.cards[this.turnsCount]
    this.incorrectGuesses = []
  }

  returnCurrentCard = () => {
    return this.deck.cards[this.turnsCount]

  }
//dd evaluateGuess to if statement
  takeTurn = (guess) => {
    const currentCard = this.returnCurrentCard()
      const turn = new Turn(guess, currentCard)
      turn.giveFeedback()
      if (!turn.evaluateGuess()) {
        this.incorrectGuesses.push(currentCard.id)
      }
      this.turnsCount ++
      this.returnCurrentCard()
      return turn.giveFeedback()
  }

  calculatePercentCorrect = () => {
    const percent = this.incorrectGuesses.length/ this.turnsCount * 100
    return Math.round(percent)
  }

  endRound = () => {
    return `**Round Over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }


}


module.exports = Round
