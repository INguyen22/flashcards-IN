const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Turn = require('../src/Turn')
const Round = require('../src/Round')

describe('Round', function() {
  let card1, card2, card3, deck, round;

  it('should be a function', function() {
    round = new Round()
    expect(Round).to.be.a('function')
  })

  it('should be an instance of Round', function() {
    round = new Round()
    expect(round).to.be.an.instanceof(Round)
  })

  it('should start with a turn count of zero', function() {
    round = new Round()
    expect(round.turns).to.equal(0)
  })

  it('should start with an empty array of incorrect guesses', function() {
    round = new Round()
    expect(round.incorrectGuesses).to.deep.equal([])
  })

  it('should be a deck of cards', function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck)

    expect(round.deck).to.equal(deck)
  })

  it('should return the current card being played', function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck)

    round.returnCurrentCard()
    expect(round.returnCurrentCard()).to.equal(card1)
  })

  it('should update round turn stats', function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck)

    round.returnCurrentCard()

    expect(round.currentCard).to.deep.equal(card1)

    round.takeTurn('sea otter')

    expect(round.turns).to.equal(1)

    round.takeTurn('spleen')

    expect(round.turns).to.equal(2)
  })

  it('should give feedback if guess is correct', function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck)

    round.returnCurrentCard()
    round.takeTurn('sea otter')

    expect(round.takeTurn('sea otter')).to.equal('correct!')
  })

  it('should give feedback if guess is incorrect', function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck)

    round.takeTurn('spleen')

    expect(round.takeTurn('spleen')).to.equal('incorrect!')
  })

  it('should store id of incorrect question', function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck)

    round.returnCurrentCard()
    round.takeTurn('sea otter')
    round.returnCurrentCard()
    round.takeTurn('spleen')

    expect(round.incorrectGuesses).to.deep.equal([14])
  })

  it('should calculate the percentage of correct guesses', function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck)

    round.returnCurrentCard()
    round.takeTurn('sea otter')
    round.returnCurrentCard()
    round.takeTurn('spleen')
    round.calculatePercentageCorrect()

    expect(round.calculatePercentageCorrect()).to.equal(50)
  })

  it('should end the round', function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck)

    round.returnCurrentCard()
    round.takeTurn('sea otter')
    round.returnCurrentCard()
    round.takeTurn('spleen')
    round.calculatePercentageCorrect()
    
    round.endRound()

    expect(round.endRound()).to.equal('Round over! you answered 50% of the questions correctly!')

  })
})
