const chai = require('chai')
const expect = chai.expect

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Turn = require('../src/Turn')
const Round = require('../src/Round')
const Game = require('../src/Game')
let game;

describe('Game', () => {

  beforeEach(() => {
    game = new Game()
    game.start()
  })

  it('should be a function', () => {
    expect(Game).to.be.a('function')
  })

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game)
  })

  it('should start the game', () => {
    expect(game.start).to.be.a('function')
  })

  it('should create cards when started', () => {
    expect(game.currentRound.deck.currentDeck[0]).to.be.an.instanceof(Card)
  })

  it('should create a new deck', () => {
    expect(game.currentRound.deck).to.be.an.instanceof(Deck)
  })

  it('should create a new round', () => {
    expect(game.currentRound).to.be.an.instanceof(Round)
  })
})
