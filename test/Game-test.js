const chai = require('chai')
const expect = chai.expect

const Game = require('../src/Game')
const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Game', () => {

  // let game
  // // let round
  // // let deck
  // // let card
  //
  // beforeEach(function() {
  //   game = new Game(round)
  //   round = new Round(deck)
  //   deck = new Deck([...card])
  //   card = new Card(id, question, answers, correctAnswer)
  // })
//should keep traack of currentRound
  it('it should be a function', () => {
    let game = new Game()

    expect(Game).to.be.a('function')
  })

  it('should be an instance of Game', () => {
    let game = new Game()

    expect(game).to.be.an.instanceof(Game)
  })

  it('should create cards', () => {
    // let card = new Card(id, question, answers, correctAnswer)
    // let deck = new Deck(card)
    // let round = new Round(deck)
    let game = new Game()


    expect(game.start()).to.equal([...card])
  })
})
