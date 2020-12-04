const chai = require('chai')
const expect = chai.expect

const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Turn', () => {
  let turn
  let card
  let card2
  let secondTurn

  beforeEach(function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    card2 = new Card(4, 'Question2', ['correct', 'wrong', 'maybe'], 'correct')
    turn = new Turn('object', card)
    secondTurn = new Turn('wrong', card2)
  })

  it('should be a function', () => {

    expect(Turn).to.be.a('function')
  })

  it('should instantiate an instance of Turn', () => {

    expect(turn).to.be.an.instanceof(Turn)
    expect(secondTurn).to.be.an.instanceof(Turn)
  })

  it('should take in a users guess as an argument', () => {

    expect(turn.guess).to.equal('object')
    expect(secondTurn.guess).to.equal('wrong')
  })

  it('should take in current Card as an argument', () => {

    expect(turn.card).to.equal(card)
    expect(secondTurn.card).to.equal(card2)
  })

  it('should return users guess', () => {

    expect(turn.returnGuess()).to.equal('object')
    expect(secondTurn.returnGuess()).to.equal('wrong')
  })

  it('should return Card', () => {

    expect(turn.returnCard()).to.equal(card)
    expect(secondTurn.returnCard()).to.equal(card2)
  })

  it('should check to see if the user guess is correct', () => {

    expect(turn.evaluateGuess()).to.equal(true)
    expect(secondTurn.evaluateGuess()).to.equal(false)
  })

  it('should return a string of correct if guess is right', () => {

    turn.evaluateGuess()

    expect(turn.giveFeedback()).to.equal('correct!')
  })

  it('should return a string of incorrect if guess is wrong', () => {

    secondTurn.evaluateGuess()

    expect(secondTurn.giveFeedback()).to.equal('incorrect!')
  })
})