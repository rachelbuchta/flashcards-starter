const chai = require('chai')
const expect = chai.expect

const Game = require('../src/Game')


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