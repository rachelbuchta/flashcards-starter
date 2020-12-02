const chai = require('chai')
const expect = chai.expect

const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Round', () => {
  // let card1;
  // let card2;
  // let card3;
  // let deck;
  // let round;

  // beforeEach(function() {
  //   card1 = new Card(2, 'Question1', ['blue', 'red', 'yellow'], 'yellow')
  //   card2 = new Card(4, 'Question2', ['correct','wrong','maybe'], 'correct')
  //   card3 = new Card(6, 'Question3', ['up', 'down', 'around'], 'up')
  //   deck = new Deck([card1, card2, card3])
  //   round = new Round(deck)
  // })

  it('should be a function', () => {
    // card1 = new Card(2, 'Question1', ['blue', 'red', 'yellow'], 'yellow')
    // card2 = new Card(4, 'Question2', ['correct','wrong','maybe'], 'correct')
    // card3 = new Card(6, 'Question3', ['up', 'down', 'around'], 'up')
    // deck = new Deck([card1, card2, card3])
    const round = new Round(deck)
    const deck = new Deck([card1, card2, card3])

    expect(Round).to.be.a('function')
  })

  it('should be an instance of Round', () => {
    const round = new Round(deck)
    const deck = new Deck([card1, card2, card3])

    expect(round).to.be.an.instanceof(Round)
  })

  it('should have a property that holds the currentCard from deck cards array', () => {
    const round = new Round(deck)
    const deck = new Deck([card1, card2, card3])

    expect(round.currentCard).to.equal(deck[0])
  })

  it('should return currentCard', () => {
    const round = new Round(deck)
    card1 = new Card(2, 'Question1', ['blue', 'red', 'yellow'], 'yellow')
    card2 = new Card(4, 'Question2', ['correct','wrong','maybe'], 'correct')
    card3 = new Card(6, 'Question3', ['up', 'down', 'around'], 'up')
    const deck = new Deck([card1, card2, card3])

    expect(round.returnCurrentCard()).to.equal(card1)
  })
})
