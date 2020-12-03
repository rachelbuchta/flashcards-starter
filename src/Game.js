const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card')
const Round = require('../src/Round')

class Game {
  constructor(round) {
    this.currentRound = round
  }

  start = (id, question, answers, correctAnswer) => {
    const newCards = data.prototypeData.map(cardData => new Card(cardData['id'], cardData['question'], cardData['answers'], cardData['correctAnswer']))

    console.log(newCards)



  }

//   printMessage(deck, round) {
//       console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
// -----------------------------------------------------------------------`)
//   }
//
//   printQuestion(round) {
//       util.main(round);
//   }
}

module.exports = Game

//
// const newCards = prototypeData.map(cardData => new Card([]))
// array.map(cardData => new Card(cardData[‘id’], …) ) 
