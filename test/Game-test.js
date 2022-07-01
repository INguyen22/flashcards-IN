const chai = require('chai')
const expect = chai.expect

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Turn = require('../src/Turn')
const Round = require('../src/Round')
const Game = require('../src/Game')

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game()
    expect(Game).to.be.a('function')
  })

  it('should be an instance of Game', function() {
    const game = new Game()
    expect(game).to.be.an.instanceof(Game)
  })

  it('should start the game', function() {
    const game = new Game()

    expect(game.start).to.be.a('function')
  })

  it('should create cards when started', function() {
    const game = new Game()

    game.start()
    game.createCards()

    expect(game.currentRound.deck.currentDeck[0]).to.be.an.instanceof(Card)
  })

  it('should create a new deck', function() {
    const game = new Game()

    game.start()
    game.createCards()
    game.createDeck()

    expect(game.currentRound.deck).to.be.an.instanceof(Deck)
  })

  it('should create a new round', function() {
    const game = new Game()

    game.createRound()

    expect(game.currentRound).to.be.an.instanceof(Round)
  })
})
