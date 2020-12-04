const chai = require('chai')
const expect = chai.expect

const Game = require('../src/Game')
const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Card = require('../src/Card')


describe('Game', () => {
  let card
  let deck
  let round
  let game

  beforeEach(function() {
    card = new Card(1, 'Question1', ['blue', 'yellow', 'green'], 'green')
    deck = new Deck(card)
    round = new Round(deck)
    game = new Game()

  })

  it('it should be a function', () => {

    expect(Game).to.be.a('function')
  })

  it('should be an instance of Game', () => {

    expect(game).to.be.an.instanceof(Game)
  })

  it('should have a property that keeps track of current round', () => {

    expect(game.currentRound).to.equal()
  })

  it('should have a method that creates a new instance cards', () => {

    game.start()

    expect(card).to.be.an.instanceof(Card)
  })

  it('should have a method that creates a new instance of deck', () => {

    game.start()

    expect(deck).to.be.an.instanceof(Deck)
  })

  it('should have a method that creates new instance of round', () => {

    game.start()

    expect(round).to.be.an.instanceof(Round)
  })
})