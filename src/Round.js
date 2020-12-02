const Turn = require('../src/Turn')


class Round {
  constructor(deck) {
    this.deck = deck
    // this.currentCard = deck.cards
    this.turns = 0
    this.incorrectGuesses = []


  }



  returnCurrentCard = () => {
    // console.log("number turns:", this.turns)
    const currentCard = this.deck.cards[this.turns]
    // this.turns in brackets
    // console.log("returnCard:", currentCard)
    return currentCard
  }

  takeTurn = (guess, card) => {
      const turn = new Turn(guess, card)
      console.log(turn)
      this.turns ++
      turn.evaluateGuess()
      this.returnCurrentCard()
      turn.giveFeedback()
      this.returnCurrentCard()
      // console.log("number turns:", this.turns)
      // const secondTurn = new Turn(guess, card)
      // console.log("turn:", turn)
      // console.log("2turn:", secondTurn)

      // console.log("boo:", turn.evaluateGuess())

      // console.log("feed:", turn.giveFeedback())


  }

  // makeGuess = (guess, card) => {
  //   const newTurn = new Turn(guess, card)
  //   console.log("turn:", newTurn)
  // }
}


module.exports = Round
