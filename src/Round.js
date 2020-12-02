const Turn = require('../src/Turn')

class Round {
  constructor(deck, currentCard) {
    this.deck = deck
    this.turnsCount = 0
    this.currentCard = deck.cards[this.turnsCount]
    this.incorrectGuesses = []
  }

  returnCurrentCard = () => {
    this.currentCard = this.deck.cards[this.turnsCount]
    return this.currentCard
  }

  takeTurn = (guess, card) => {
      const turn = new Turn(guess, card)
      turn.evaluateGuess()
      if (this.currentCard.correctAnswer !== turn.guess) {
        this.incorrectGuesses.push(this.currentCard.id)
      }
      console.log(this.incorrectGuesses)
      turn.giveFeedback()
      this.turnsCount ++
      this.returnCurrentCard()
  }


}


module.exports = Round
