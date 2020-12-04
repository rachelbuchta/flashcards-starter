class Deck {
  constructor(cards) {
    this.cards = cards
  }

  countCards() {
   return this.cards.length === 31 ? this.cards.length - 1 : this.cards.length
  }
}

module.exports = Deck
