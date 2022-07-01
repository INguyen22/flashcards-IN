const Card = require('./card')
class Turn {
  constructor(guess, card) {
    this.guess = guess
    this.card = card
  }
  returnGuess() {
    this.guess
  }
  returnCard() {
    this.card
  }
  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      return true
    }
      return false
  }
  giveFeedback() {
    if (this.evaluateGuess()) {
      return 'correct!'
    }
      return 'incorrect!'
  }
}

module.exports = Turn;
