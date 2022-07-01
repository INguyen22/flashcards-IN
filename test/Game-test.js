const chai = require('chai')
const expect = chai.expect

const data = require('./data');
const prototypeQuestions = data.prototypeData;
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Turn = require('../src/Turn')
const Round = require('../src/Round')
const Game = require('../src/Game')

describe('Game', function() {

  it.skip('should be a function', function() {
    const game = new Game()
    expect(Game).to.be.a('function')
  })

  it.skip('should be an instance of Game', function() {
    const game = new Game()
    expect(game).to.be.an.instanceof(Game)
  })

  it.skip('should start the game', function() {
    const game = new Game()

    game.start()

    expect(game.start()).to.be.a('function')
  })

  it.skip('should create cards when started', function() {
    const game = new Game()

    game.createCards()

    expect(game.currentRound.deck.currentDeck[0]).to.be.an.instanceof(Card)
  })

  it.skip('should create a new deck', function() {
    const game = new Game()

    game.createDeck()

    expect(game.currentRound.deck).to.be.an.instanceof(Deck)
  })

  it.skip('should create a new round', function() {
    const game = new Game()

    game.createRound()

    expect(game.currentRound).to.be.an.instanceof(Round)
  })
})
