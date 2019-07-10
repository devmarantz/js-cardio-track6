// this is how you create an object
const deck = {};

function Deck(suit, weight) {
  this.suit = suit || '';
  this.weight = weight || 0;
  this.shuffle = function() {
    return "I'm Shuffling";
  };
}

const newDeck = new Deck('♠', 2);

newDeck.dealCard = function() {
  return "I'm Dealing";
};

// const keys = Object.keys(newDeck);
// console.log(`I am the keys`);
// console.log(keys);

// const values = Object.values(newDeck);
// console.log(`I am the values`);
// console.log(values);

const entries = Object.entries(newDeck);
console.log(entries);
