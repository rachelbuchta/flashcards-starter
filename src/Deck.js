class Deck {
  constructor(card) {
    this.cards = [...card]
  }

  countCards = () => {
    console.log("deck:", this.cards[0])
    return this.cards.length
  }
}


module.exports = Deck
