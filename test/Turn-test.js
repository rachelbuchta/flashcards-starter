const chai = require('chai')
const expect = chai.expect

const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Turn', () => {
  let turn;
  let card;
  let secondTurn;

  beforeEach(function() {
     card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
     turn = new Turn('object', card)
     secondTurn = new Turn('array', card)
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
  })

  it('should take in current Card as an argument', () => {

    expect(turn.card).to.equal(card)
    expect(secondTurn.card).to.equal(card)
  })

  it('should have a property of isCorrect that defaults to false', () => {

    expect(turn.isCorrect).to.equal(false)
    expect(secondTurn.isCorrect).to.equal(false)
  })

  it('should return users guess', () => {

    expect(turn.returnGuess()).to.equal('object')
    expect(secondTurn.returnGuess()).to.equal('array')
  })

  it('should return Card', () => {

    expect(turn.returnCard()).to.equal(card)
    expect(secondTurn.returnCard()).to.equal(card)
  })

  it('should check to see if the user guess is correct', () => {

    expect(turn.evaluateGuess('object')).to.equal(turn.isCorrect, true)
    expect(secondTurn.evaluateGuess('array')).to.equal(secondTurn.isCorrect, false)
  })

  it('should return a string of correct if guess is right', () => {

    turn.evaluateGuess('object')

    expect(turn.giveFeedback()).to.equal('correct!')
  })

  it('should return a string of incorrect if guess is wrong', () => {

    secondTurn.evaluateGuess('array')

    expect(secondTurn.giveFeedback()).to.equal('incorrect!')
  })
})
