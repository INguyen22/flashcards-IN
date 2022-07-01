const Turn = require('../src/Turn')

let interval;

class Round {
  constructor(deck) {
    this.deck = deck
    this.currentCard = ''
    this.turns = 0
    this.incorrectGuesses = []
    this.seconds = 0
    this.minutes = 0
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
  startTimer() {
    interval = setInterval(function() {
        this.seconds += 1
        if(this.seconds > 59) {
          this.seconds = 0
          this.minutes += 1
        }}, 1000)
  }
  // timer() {
  //   this.seconds++
  //   if(this.seconds > 59) {
  //     this.seconds = 0
  //     this.minutes++
  //   }
  //}
  endRound() {
    console.log(`Round over! you answered ${this.calculatePercentageCorrect()}% of the questions correctly!`)
    console.log(`it took you ${this.minutes} minutes and ${this.seconds} seconds`)
    return `Round over! you answered ${this.calculatePercentageCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;
