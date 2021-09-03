class GuessingGame {
  constructor() { }

  setRange(min, max) {
    this.start = min;
    this.end = max;
  }

  guess() {
    this.mid = Math.ceil((this.start + this.end) / 2);
    return this.mid;
  }

  lower() {
    this.end = this.mid;
  }

  greater() {
    this.start = this.mid;
  }
}

module.exports = GuessingGame;
