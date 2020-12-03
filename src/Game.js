const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card')
const Round = require('../src/Round')
const Deck = require('../src/Deck')

class Game {
  constructor(round) {
    this.currentRound = round
  }

  start = (deck,round) => {
    const newCards = data.prototypeData.map(cardData => new Card(cardData['id'], cardData['question'], cardData['answers'], cardData['correctAnswer']))
    const newDeck = new Deck(newCards)
    newDeck.cards.push(newCards)
    const newRound = new Round(newDeck)
    this.printMessage(newDeck, newRound)
    this.printQuestion(newRound)
    console.log(newRound)
    console.log(newDeck.cards)
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

//
// const newCards = prototypeData.map(cardData => new Card([]))
// array.map(cardData => new Card(cardData[‘id’], …) ) 
