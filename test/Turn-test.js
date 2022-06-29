const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Turn', function() {

  it.skip('should be a function', function() {
    const turn = new Turn()
    expect(Turn).to.be.a('function')
})

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn()
    expect(turn).to.be.an.instanceof(Turn)
  })

  it.skip('should store a guess and current card', function() {
    const card = new Card (1, 'What is Robbie\'s favorite animal',
    ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn ('pug', card)

    expect(turn.guess).to.equal('pug')
    expect(turn.card).to.equal(card)
  })

  it.skip('should be able to return the guess', function() {
    const card = new Card (1, 'What is Robbie\'s favorite animal',
    ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn ('pug', card)

    turn.returnGuess()
    expect(turn.guess).to.equal('pug')
})

  it.skip('should be able to return the card', function() {
    const card = new Card (1, 'What is Robbie\'s favorite animal',
    ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn ('pug', card)

    turn.returnCard()
    expect(turn.guess).to.equal(card)
})

  it.skip('should return boolean if indication if guess is right or wrong', function() {

    turn.returnGuess()
    turn.evaluateGuess()

    expect(turn.evaluateGuess()).to.equal(false)
  })

  it.skip('should give feedback', function() {

    turn.returnGuess()
    turn.evaluateGuess()
    turn.giveFeedback()

    expect(turn.giveFeedback()).to.equal('incorrect!')
  })
})
