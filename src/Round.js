const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck
    this.currentCard = ''
    this.turns = 0
    this.incorrectGuesses = []
    this.seconds = 0
    this.minutes = 0
    this.interval = setInterval(this.timer.bind(this), 1000)
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
    }
    return turn.giveFeedback()
  }
  calculatePercentageCorrect() {
    const percentCorrect = (this.incorrectGuesses.length / this.turns) * 100
    return percentCorrect
  }
  timer() {
    this.seconds++
    if(this.seconds > 59) {
      this.seconds = 0
      this.minutes++
    }
  }
  endRound() {
    clearInterval(this.interval)
    console.log(`Round over! you answered ${this.calculatePercentageCorrect().toFixed(2)}% of the questions correctly!`)
    console.log(`it took you ${this.minutes} minutes and ${this.seconds} seconds`)
    return `Round over! you answered ${this.calculatePercentageCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;
