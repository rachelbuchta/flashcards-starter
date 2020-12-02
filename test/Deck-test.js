const chai = require('chai')
const expect = chai.expect

const Deck = require('../src/Deck')
const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Deck', () => {
  let card1;
  let card2;
  let card3;
  let deck;

  beforeEach(function() {
    card1 = new Card(2, 'Question1', ['blue', 'red', 'yellow'], 'yellow')
    card2 = new Card(4, 'Question2', ['correct','wrong','maybe'], 'correct')
    card3 = new Card(6, 'Question3', ['up', 'down', 'around'], 'up')
    deck = new Deck()
  })

  it('should be a function', () => {
    const deck = new Deck()

    expect(Deck).to.be.a('function')
  })

  it('should instantiate an instance of Deck', () => {

    expect(deck).to.be.an.instanceof(Deck)
  })

  it('should know how many cards are in the deck', () => {

    expect(deck.countCards()).to.equal(3)
  })
})
