const peoples = [
  'Faber Guerreau',
  'Gilbertine Stichall',
  'Cristina Cuckoo',
  'Johnette Chatelot',
  'Trish Mayou',
  'Ruth Connell',
  'Hamid Elsegood',
  'Thorstein Woodward',
  'Bethena Porte',
  'Nelle Durek',
  'Bastien Leyrroyd',
  'Albie Tranfield',
  'Bryce Temprell',
  'Darya Chinery',
  'Rea Matoshin',
  'Tommie Benda',
  'Lowell Trowel',
  'Wayne Claughton',
  'Teena Bansal',
  'Basile Phonix',
];

// function sortByLastName(people) {
//   const lastName = [];
//   people.map((peeps, i) => {
//     let names = peeps.split(' ');
//     lastName.push(names[1]);
//   });
//   console.log(lastName);
//   return lastName.sort();
// }

// sortByLastName(peoples);

// function countTotalCharacters(people) {
//   let count = 0;
//   people.map(peeps => {
//     count += peeps.length;
//   });
//   return count;
// }

// console.log(countTotalCharacters(peoples));

function everyoneHasLetter(people, letter) {
  let answer = true;
  people.map(peeps => {
    if (!peeps.includes(letter)) answer = false;
  });
  return answer;
}

console.log(everyoneHasLetter(peoples, 'z'));

const name = 'Tony Danza';

// console.log(name.includes('p'));
