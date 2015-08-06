// add code
var Player = function(name) {
  this.name = name;
};

var Game = function(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Player.prototype.picks = function (hand) {
  if (hand === undefined)
    return this.hand;
  this.hand = hand;
};


Game.prototype.winner = function() {
  if(this.player1.picks() === this.player2.picks()){
    return null;
  }
  if(this.player1.picks() === 'rock'){
    if(this.player2.picks() === 'scissors')
      return this.player1;
    return this.player2;
  }

  if(this.player1.picks() === 'scissors'){
    if(this.player2.picks() === 'rock')
      return this.player2;
    return this.player1;
  }
  if(this.player1.picks() === 'paper'){
    if(this.player2.picks() === 'rock')
      return this.player1;
    return this.player2;
  }

};

module.exports = {
  Player: Player,
  Game: Game
};
