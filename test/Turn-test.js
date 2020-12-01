const chai = require('chai')
const expect = chai.expect

const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Turn', function() {

  it('should be a function', function() {
  const turn = new Turn()

  expect(Turn).to.be.a('function')
})

  it('should instantiate an instance of Turn', function() {
    const turn = new Turn()

    expect(turn).to.be.an.instanceof(Turn)
  })

  it('should take in a users guess as an argument', function() {
    const turn = new Turn('array', card)

    expect(turn.guess).to.equal('array')
  })

  it('should store instantiation of current Card as an argument', function() {
    const turn = new Turn('array', card)

    expect(turn.card).to.equal(card)
  })

  it('should have a property of isCorrect that defaults to false', function() {
    const turn = new Turn('array', card)

    expect(turn.isCorrect).to.equal(false)
  })

  it('should return users guess', function() {
    const turn = new Turn('array', card)

    expect(turn.returnGuess()).to.equal('array')
  })

  it('should return card', function() {
    const turn = new Turn('array', card)

    expect(turn.returnCard()).to.equal(card)
  })

  it('should check to see if the answer is correct', function() {
    const turn = new Turn('array', card)

    expect(turn.evaluateGuess()).to.equal(turn.isCorrect, true)
  })

  it('should return a string depending on if its true or false', function() {
    const turn = new Turn('array', card)
    const turn2 = new Turn('object', card)

    expect(turn.giveFeedback()).to.equal('correct!')
    expect(turn2.giveFeedback()).to.equal('incorrect!')
  })
})
