const Card = require('../src/Card')
class Deck {
  constructor(card) {
    this.cards = [...card]
  }

  countCards = () => {
    console.log("deck:", this.cards.length)
    return this.cards.length
  }
}


module.exports = Deck
