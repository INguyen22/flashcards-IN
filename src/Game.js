const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Turn = require('../src/Turn')
const Round = require('../src/Round')
// let interval;

class Game {
  constructor() {
    this.cardsInPlay = []
    // this.seconds = 0
    // this.minutes = 0
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    this.createCards()
    this.createDeck()
    this.createRound()
    this.printMessage(this.newDeck)
    this.printQuestion(this.currentRound)
    this.currentRound.startTimer()
  }
  createCards() {
    prototypeQuestions.forEach(prototypeQuestion => {
      this.cardsInPlay.push(new Card(prototypeQuestion.id, prototypeQuestion.question, prototypeQuestion.answers, prototypeQuestion.correctAnswer))
    })
  }
  createDeck() {
    this.newDeck = new Deck(this.cardsInPlay)
  }
  createRound() {
    this.currentRound = new Round(this.newDeck)
  }
}

module.exports = Game;
