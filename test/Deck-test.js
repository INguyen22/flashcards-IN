const chai = require('chai')
const expect = chai.expect

const Deck = require('../src/Deck')
const Card = require('../src/Card')
let card1;
let card2;
let card3;
let deck;

describe('Deck', () => {

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    deck = new Deck([card1, card2, card3]);
  })

  it('should be a function', () => {
    expect(Deck).to.be.a('function')
  })

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck)
  })

  it('should be an array or card objects', () => {
    expect(deck.currentDeck).to.deep.equal([card1, card2, card3])
  })

  it('should know how many cards are in a deck', () => {
    expect(deck.countCards()).to.equal(3)
  })
})
