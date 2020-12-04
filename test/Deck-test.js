/* eslint-disable max-len */
const chai = require('chai')
const expect = chai.expect

const Deck = require('../src/Deck')
const Card = require('../src/Card')

describe('Deck', () => {
  let card
  let card2
  let card3
  let deck

  beforeEach(function() {
    card = new Card(1, 'Question1', ['blue', 'yellow', 'green'], 'green')
    card2 = new Card(2, 'Question2', ['correct', 'wrong', 'maybe'], 'correct')
    card3 = new Card(3, 'Question3', ['up', 'down', 'around'], 'down')
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