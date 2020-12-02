const chai = require('chai')
const expect = chai.expect

const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Round', () => {
  let card;
  let card2;
  let card3;
  let turn;
  let deck;
  let round;


  beforeEach(function() {

    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    card2 = new Card(4, 'Question2', ['correct','wrong','maybe'], 'correct')
    card3 = new Card(6, 'Question3', ['up', 'down', 'around'], 'up')
    turn = new Turn('object', card)
    deck = new Deck([card, card2, card3])
    round = new Round(deck)

  })

  it('should be a function', () => {

    expect(Round).to.be.a('function')
  })

  it('should be an instance of Round', () => {

    expect(round).to.be.an.instanceof(Round)
  })

  it('should have a property that holds the currentCard from deck cards array', () => {

    expect(round.currentCard).to.equal(deck.cards)
  })

  it('should return currentCard', () => {

    expect(round.returnCurrentCard()).to.equal(deck.cards[0])
  })

  it('should have a property that counts number of turns and starts at 0', () => {

    expect(round.turns).to.equal(0)
  })

  it('should have a property that stores the users guess', () => {

    expect(round.guess).to.equal('object')
  })
})
