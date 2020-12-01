const chai = require('chai')
const expect = chai.expect

const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Turn', () => {
  it('should be a function', () => {
  const turn = new Turn()

  expect(Turn).to.be.a('function')
})

  it('should instantiate an instance of Turn', () => {
    const turn = new Turn()

    expect(turn).to.be.an.instanceof(Turn)
  })

  it('should take in a users guess as an argument', () => {
    const turn = new Turn('object')

    expect(turn.guess).to.equal('object')
  })

  it('should take in current Card as an argument', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card)

    expect(turn.card).to.equal(card)
  })

  it('should have a property of isCorrect that defaults to false', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card)

    expect(turn.isCorrect).to.equal(false)
  })

  it('should return users guess', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card)

    expect(turn.returnGuess()).to.equal('object')
  })

  it('should return Card', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card)

    expect(turn.returnCard()).to.equal(card)
  })

  it('should check to see if the user guess is correct', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card)

    expect(turn.evaluateGuess()).to.equal(turn.isCorrect, true)
  })

  it('should return a string depending on if user guess is correct or not', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card)

    turn.evaluateGuess()

    expect(turn.giveFeedback()).to.equal('correct!')
  })
})
