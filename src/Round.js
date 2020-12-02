const Turn = require('../src/Turn')


class Round {
  constructor(deck, currentCard) {
    this.deck = deck
    this.turns = 0
    this.currentCard = deck.cards[this.turns]
    this.incorrectGuesses = []
  }



  returnCurrentCard = () => {
    this.currentCard = this.deck.cards[this.turns]
    return this.currentCard
  }

  takeTurn = (guess, card) => {
      const turn = new Turn(guess, card)
      console.log(turn.guess)
      // console.log(this.turns)

      turn.evaluateGuess()
      if (this.currentCard.correctAnswer !== turn.guess) {
        this.incorrectGuesses.push(this.currentCard.id)
      }

      // this.storeIncorrectGuesses()
      // console.log(this.currentCard)
      // console.log(turn.evaluateGuess())
      turn.giveFeedback()
      // console.log(turn.giveFeedback())
      this.turns ++
      // console.log(this.turns)
      this.returnCurrentCard()

      // console.log(this.returnCurrentCard())
  }

  // storeIncorrectGuesses = (guess, card) => {
  //   const turn = new Turn(guess, card)
  //   console.log(this.currentCard.id)
  //   console.log(this.currentCard.correctAnswer)
  //   console.log(turn.guess)
  //   if (this.currentCard.correctAnswer !== turn.guess) {
  //     this.incorrectGuesses.push(this.currentCard.id)
  //   }
  //
  // }
}


module.exports = Round
