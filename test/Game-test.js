const chai = require('chai')
const expect = chai.expect

const Game = require('../src/Game')
// const Round = require('../src/Round')
// const Deck = require('../src/Deck')
// const Turn = require('../src/Turn')
// const Card = require('../src/Card')

describe('Game', () => {

  it('it should be a function', () => {
    // let game = new Game()

    expect(Game).to.be.a('function')
  })

  it('should be an instance of Game', () => {
    let game = new Game()

    expect(game).to.be.an.instanceof(Game)
  })

})
