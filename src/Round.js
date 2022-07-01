const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck
    this.currentCard = ''
    this.turns = 0
    this.incorrectGuesses = []
  }
  returnCurrentCard() {
    this.currentCard = this.deck.currentDeck[this.turns]
    return this.currentCard
  }
  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard)
    this.turns++
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id)
      return turn.giveFeedback()
    }
    return turn.giveFeedback()
  }
  calculatePercentageCorrect() {
    const percentCorrect = (this.incorrectGuesses.length / this.turns) * 100
    return percentCorrect
  }
  endRound() {
    console.log(`Round over! you answered ${this.calculatePercentageCorrect()}% of the questions correctly!`)
  }
}

module.exports = Round;
