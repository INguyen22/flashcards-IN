const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn')
const Card = require('../src/Card')
let card;
let turn;

describe('Turn', () => {

  beforeEach(() => {
    card = new Card (1, 'What is Robbie\'s favorite animal',
    ['sea otter', 'pug', 'capybara'], 'sea otter')
    turn = new Turn ('pug', card)
  })

  it('should be a function', () => {
    expect(Turn).to.be.a('function')
})

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn)
  })

  it('should store a guess and current card', () => {
    expect(turn.guess).to.equal('pug')
    expect(turn.card).to.equal(card)
  })

  it('should be able to return the guess', () => {
    expect(turn.returnGuess()).to.equal('pug')
})

  it('should be able to return the card', () => {
    expect(turn.returnCard()).to.equal(card)
})

  it('should return boolean if indication if guess is right or wrong', () => {
      expect(turn.evaluateGuess()).to.equal(false)
  })

  it('should give feedback', () => {
      expect(turn.giveFeedback()).to.equal('incorrect!')
  })
})
