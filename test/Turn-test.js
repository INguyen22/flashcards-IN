const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn()
    expect(Turn).to.be.a('function')
})

  it('should be an instance of Turn', function() {
    const turn = new Turn()
    expect(turn).to.be.an.instanceof(Turn)
  })

  it('should store a guess and current card', function() {
    const card = new Card (1, 'What is Robbie\'s favorite animal',
    ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn ('pug', card)

    expect(turn.guess).to.equal('pug')
    expect(turn.card).to.equal(card)
  })

  it('should be able to return the guess', function() {
    const card = new Card (1, 'What is Robbie\'s favorite animal',
    ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn ('pug', card)

    turn.returnGuess()
    expect(turn.guess).to.equal('pug')
})

  it('should be able to return the card', function() {
    const card = new Card (1, 'What is Robbie\'s favorite animal',
    ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn ('pug', card)

    turn.returnCard()
    expect(turn.card).to.equal(card)
})

  it('should return boolean if indication if guess is right or wrong', function() {
    const card = new Card (1, 'What is Robbie\'s favorite animal',
    ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn ('pug', card)
      turn.returnGuess()
      turn.evaluateGuess()

      expect(turn.evaluateGuess()).to.equal(false)
  })

  it('should give feedback', function() {
    const card = new Card (1, 'What is Robbie\'s favorite animal',
    ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn ('pug', card)
      turn.returnGuess()
      turn.evaluateGuess()
      turn.giveFeedback()

      expect(turn.giveFeedback()).to.equal('incorrect!')
  })
})
