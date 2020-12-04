const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck
    this.turns = 0
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns]
  }

  takeTurn(guess) {
    const currentCard = this.returnCurrentCard()
    const turn = new Turn(guess, currentCard)
    this.turns++
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(currentCard.id)
    }
    return turn.giveFeedback()
  }

  calculatePercentCorrect() {
    const percent = ((this.turns - this.incorrectGuesses.length) / this.turns) * 100
    return Math.round(percent)
  }

  endRound() {
    console.log(`**Round Over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return `**Round Over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round
