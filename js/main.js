// add code
var Player = function(name) {
  this.name = name;
};

var Game = function(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Player.prototype.picks = function (hand) {
  this.hand = hand;
};


Game.prototype.winner = function() {
    if (this.player1.hand === 'rock' && this.player2.hand === "scissors") {
      return this.player1;
    }
};

module.exports = {
  Player: Player,
  Game: Game
}
