/* eslint-disable max-len */
const data = require('./data')
const prototypeQuestions = data.prototypeData
const util = require('./util')
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')


class Game {
  constructor() {
    this.currentRound
  }

  start() {
    const newCards = prototypeQuestions.map(cardData => new Card(cardData.id, cardData.question, cardData.answers, cardData.correctAnswer))
    const newDeck = new Deck(newCards)
    newDeck.cards.push(newCards)
    this.currentRound = new Round(newDeck)
    this.printMessage(newDeck)
    this.printQuestion(this.currentRound)
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round)
  }
}

module.exports = Game
