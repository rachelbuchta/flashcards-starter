class Round {
  constructor(deck) {
    this.currentCard = deck.cards
    this.turns = 0
    // this.guess = turn.guess
  }


  returnCurrentCard = () => {
    this.currentCard = this.currentCard[0]
    console.log("returnCard:", this.currentCard)
    return this.currentCard
  }

  // takeTurn = () => {
  //   console.log(this.guess)
  // }
}


module.exports = Round
