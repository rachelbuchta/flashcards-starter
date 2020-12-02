const Turn = require('../src/Turn')


class Round {
  constructor(deck) {
    this.deck = deck
    // this.currentCard = deck.cards
    this.turns = 0
    this.incorrectGuesses = []


  }



  returnCurrentCard = () => {
    const currentCard = this.deck.cards[0]
    console.log("returnCard:", currentCard)
    return currentCard
  }

  takeTurn = (guess, card) => {
      this.turns ++
      const turn = new Turn(guess, card)

      console.log("number turns:", this.turns)
      // const secondTurn = new Turn(guess, card)
      console.log("turn:", turn)
      // console.log("2turn:", secondTurn)
      turn.evaluateGuess()
      console.log("boo:", turn.evaluateGuess())
      turn.giveFeedback()
      console.log("feed:", turn.giveFeedback())


  }

  // makeGuess = (guess, card) => {
  //   const newTurn = new Turn(guess, card)
  //   console.log("turn:", newTurn)
  // }
}


module.exports = Round
