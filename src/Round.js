class Round {
  constructor(deck) {
    this.currentCard = deck.cards
  }


  returnCurrentCard = () => {
    this.currentCard = this.currentCard[0]
    console.log("returnCard:", this.currentCard)
    return this.currentCard
  }
}


module.exports = Round
