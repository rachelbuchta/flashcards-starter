/* eslint-disable max-len */
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
    card = new Card(1, 'Question1', ['blue', 'yellow', 'green'], 'green')
    card2 = new Card(2, 'Question2', ['correct', 'wrong', 'maybe'], 'correct')
    turn = new Turn('green', card)
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

    expect(turn.guess).to.equal('green')
    expect(secondTurn.guess).to.equal('wrong')
  })

  it('should take in current Card as an argument', () => {

    expect(turn.card).to.equal(card)
    expect(secondTurn.card).to.equal(card2)
  })

  it('should return users guess', () => {

    expect(turn.returnGuess()).to.equal('green')
    expect(secondTurn.returnGuess()).to.equal('wrong')
  })

  it('should return Card', () => {

    expect(turn.returnCard()).to.equal(card)
    expect(secondTurn.returnCard()).to.equal(card2)
  })

  it('should check to see if the users guess is correct', () => {

    expect(turn.evaluateGuess()).to.equal(true)
    expect(secondTurn.evaluateGuess()).to.equal(false)
  })

  it('should return a string of correct if guess is right and a string of incorrect if guess is wrong', () => {

    turn.evaluateGuess('green')
    turn.evaluateGuess('wrong')

    expect(turn.giveFeedback()).to.equal('correct!')
    expect(secondTurn.giveFeedback()).to.equal('incorrect!')
  })
})