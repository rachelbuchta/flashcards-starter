/* eslint-disable max-len */
const chai = require('chai')
const expect = chai.expect

const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Round', () => {
  let secondTurn
  let turn
  let card
  let card2
  let card3
  let deck
  let round

  beforeEach(function() {

    card = new Card(1, 'Question1', ['blue', 'yellow', 'green'], 'green')
    card2 = new Card(4, 'Question2', ['correct', 'wrong', 'maybe'], 'correct')
    card3 = new Card(6, 'Question3', ['up', 'down', 'around'], 'up')
    turn = new Turn('green', card)
    secondTurn = new Turn('wrong', card2)
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

    expect(round.turns).to.equal(0)
  })

  it('should have a property that stores incorrect guesses', () => {

    expect(round.incorrectGuesses).to.deep.equal([])
  })

  it('should return currentCard', () => {

    expect(round.returnCurrentCard()).to.equal(deck.cards[0])
  })

  it('should evaluate if guess is right or wrong', () => {

    round.takeTurn('wrong')
    round.takeTurn('green')

    expect(secondTurn.evaluateGuess()).to.equal(false)
    expect(turn.evaluateGuess()).to.equal(true)
  })

  it('should return a string of correct if guess is right and a string of incorrect if guess is wrong', () => {

    round.takeTurn('green')
    round.takeTurn('wrong')

    expect(turn.giveFeedback()).to.equal('correct!')
    expect(secondTurn.giveFeedback()).to.equal('incorrect!')
  })

  it('should store incorrect guesses in an array by id', () => {

    round.takeTurn('yellow')
    round.takeTurn('wrong')
    round.takeTurn('up')

    expect(round.incorrectGuesses).to.deep.equal([1, 4])
    expect(round.incorrectGuesses.length).to.equal(2)
  })

  it('should increase turns by 1 after each guess', () => {

    round.takeTurn('wrong')
    expect(round.turns).to.equal(1)
    round.takeTurn('green')
    expect(round.turns).to.equal(2)
    round.takeTurn('up')
    expect(round.turns).to.equal(3)
  })

  it('should return the next card in deck array as currentCard', () => {

    round.takeTurn('wrong')
    expect(round.returnCurrentCard()).to.equal(deck.cards[1])
    round.takeTurn('green')
    expect(round.returnCurrentCard()).to.equal(deck.cards[2])
    round.takeTurn('up')
    expect(round.returnCurrentCard()).to.equal(deck.cards[3])
  })

  it('should calculate percent correct', () => {


    round.takeTurn('array')
    round.takeTurn('wrong')
    round.takeTurn('up')

    expect(round.calculatePercentCorrect()).to.equal(33)
  })

  it('should print a string with the percent correct', () => {

    round.takeTurn('array')
    round.takeTurn('wrong')
    round.takeTurn('up')
    round.calculatePercentCorrect()

    expect(round.endRound()).to.equal('**Round Over!** You answered 33% of the questions correctly!')
  })
})