// this is how you create an object
const deck = {};

function Deck(suit, weight) {
  this.suit = suit  '';
  this.weight = weight  0;
  this.shuffle = function() {
    return "I'm Shuffling";
  };
}

const newDeck = new Deck('spade', 2);
console.log(newDeck.shuffle());
newDeck.dealCard = function() {
  return "I'm Dealing";
};

console.log(newDeck.dealCard());

const newerDeck = new Deck();

delete newerDeck.weight;

console.log(newerDeck);
