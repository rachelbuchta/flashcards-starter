const chai = require('chai')
const expect = chai.expect

const Round = require('../src/Round')
const Deck = require('../src/Deck')
// const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Round', () => {
  let card
  let card2
  let card3
  let deck
  let round

  beforeEach(function() {

    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    card2 = new Card(4, 'Question2', ['correct', 'wrong', 'maybe'], 'correct')
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

  it('should have a property that counts number of turns and starts at 0', () => {

    expect(round.turnsCount).to.equal(0)
  })

  it('should have a property that stores incorrect guesses', () => {

    expect(round.incorrectGuesses).to.deep.equal([])
  })

  it('should return currentCard', () => {

    expect(round.returnCurrentCard()).to.equal(deck.cards[0])
  })

  it('should evaluate if guess is correct or incorrect', () => {
    // const turn = new Turn('wrong')
    round.takeTurn('wrong')

    expect(round.takeTurn()).to.equal('incorrect!')
  })

  it('should store incorrect guesses in an array by id', () => {
    // const turn = new Turn('wrong')
    // const secondTurn = new Turn('array')
    // const thirdTurn = new Turn('up')

    round.takeTurn('array')
    round.takeTurn('wrong')
    round.takeTurn('up')

    expect(round.incorrectGuesses).to.deep.equal([1, 4])
    expect(round.incorrectGuesses.length).to.equal(2)
  })

  it('should return a string of correct or incorrect', () => {


    round.takeTurn('wrong')

    expect(round.takeTurn()).to.equal('incorrect!')
  })

  it('should increase turns by 1', () => {


    round.takeTurn('wrong')

    expect(round.turnsCount).to.equal(1)
  })

  it('should return the next card in deck array as currentCard', () => {


    round.takeTurn('wrong')

    expect(round.returnCurrentCard()).to.equal(deck.cards[1])
  })

  it('should calculate percent correct', () => {


    round.takeTurn('array')
    round.takeTurn('wrong')
    round.takeTurn('up')

    expect(round.calculatePercentCorrect()).to.equal(67)
  })

  it('should print a string with the percent correct', () => {

    round.takeTurn('array')
    round.takeTurn('wrong')
    round.takeTurn('up')
    round.calculatePercentCorrect()

    expect(round.endRound()).to.equal('**Round Over!** You answered 67% of the questions correctly!')
  })

})
