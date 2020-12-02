const chai = require('chai')
const expect = chai.expect

const Deck = require('../src/Deck')
const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Deck', () => {
  let card;
  let card2;
  let card3;
  let deck;

  beforeEach(function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    card2 = new Card(4, 'Question2', ['correct','wrong','maybe'], 'correct')
    card3 = new Card(6, 'Question3', ['up', 'down', 'around'], 'up')
    deck = new Deck([card, card2, card3])
  })

  it('should be a function', () => {

    expect(Deck).to.be.a('function')
  })

  it('should instantiate an instance of Deck', () => {

    expect(deck).to.be.an.instanceof(Deck)
  })

  it('should store an array of cards', () => {

    expect(deck.cards).to.deep.equal([card, card2, card3])
  })

  it('should know how many cards are in the deck', () => {

    expect(deck.countCards()).to.equal(3)
  })
})
