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
  let deck;
  let round;


  beforeEach(function() {

    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    card2 = new Card(4, 'Question2', ['correct','wrong','maybe'], 'correct')
    card3 = new Card(6, 'Question3', ['up', 'down', 'around'], 'up')
    deck = new Deck([card, card2, card3])
    round = new Round(deck)

  })

  it('should be a function', () => {

    expect(Round).to.be.a('function')
  })

  it('should be an instance of Round', () => {

    expect(round).to.be.an.instanceof(Round)
  })

  it('should have a property that holds deck array', () => {

    expect(round.deck).to.deep.equal(deck)
  })

  // it('should have a property that holds the currentCard from deck cards array', () => {
  //
  //   expect(round.currentCard).to.equal(deck.cards)
  // })

  it('should have a property that counts number of turns and starts at 0', () => {

    expect(round.turns).to.equal(0)
  })

  it('should have a property that stores incorrect guesses', () => {

    expect(round.incorrectGuesses).to.deep.equal([])
  })

  it('should return currentCard', () => {

    expect(round.returnCurrentCard()).to.equal(deck.cards[0])
  })

  it('should create a new instance of Turn when a guess is made', () => {
    const turn = new Turn('object', card)
    // const secondTurn = new Turn('array', card)




    expect(round.takeTurn('object', card)).to.equal('correct!')
    // expect(round.takeTurn('array', card)).to.equal('incorrect!')
  })

  it('should increase turns by 1', () => {
    const turn = new Turn('object', card)

    round.takeTurn('object', card)

    expect(round.takeTurn('object', card)).to.equal(1)
  })


  // it('should have a property that stores the users guess', () => {
  //
  //   expect(round.guess).to.equal('object')
  // })
})
