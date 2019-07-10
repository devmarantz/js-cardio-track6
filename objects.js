// this is how you create an object
const deck = {};

function Deck(suit, weight) {
  this.suit = suit || '';
  this.weight = weight || 0;
  this.shuffle = function() {
    return "I'm Shuffling";
  };
  this.level1 = {
    level2: {
      level3: {},
    },
  },
};

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

// const entries = Object.entries(newDeck);
// console.log(entries);

// newDeck.dealCard = function() {
//   return `I don't feel lke dealing now`;
// };

// console.log(newDeck.dealCard());

// const newerDeck = JSON.parse(JSON.stringify(newDeck));

// // console.log(newerDeck);

// const { suit, weight, dealCard } = newDeck;
// console.log(dealCard());

class ClassDeck {
  constructor(suit, weight) {
    this.suit = suit || '';
    this.weight = weight || 0;
    this.shuffle = function() {
      return "I'm Shuffling";
    };
    this.level1 = {
      level2: {
        level3: {},
      },
    },
  }
}