const data = require('./data')
const prototypeQuestions = data.prototypeData
const util = require('./util')
const Card = require('../src/Card')
const Round = require('../src/Round')
const Deck = require('../src/Deck')

class Game {
  constructor() {
    this.currentRound;
  }

  start() {
    const newCards = prototypeQuestions.map(cardData => new Card(cardData.id, cardData.question, cardData.answers, cardData.correctAnswer))
    const newDeck = new Deck(newCards)
    newDeck.cards.push(newCards)
    this.currentRound = new Round(newDeck)
    this.printMessage(newDeck, this.currentRound)
    this.printQuestion(this.currentRound)
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game
