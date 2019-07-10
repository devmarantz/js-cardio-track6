// 🏃🏼🏊🏼🏋🏼🏄🏼

/**
 * Filters people array based on total number of letters in their name (including spaces).
 * Filter if name is strictly greater than length
 *
 * @param {string[]} people
 * @param {number} length
 * @returns {string[]} filtered array
 */
function filterByLength(people, length) {
  const filteredArray = people.filter(peeps => peeps.length > length);
  return filteredArray;
}

/**
 * Returns an array of every nth person.
 * Note that counting starts at 0,
 * so the returned array will always include (at least) the first person.
 *
 * @param  {string[]} people
 * @param  {number} n
 * @returns {string[]}
 *
 * @example
 *    everyNPerson(['Matt', 'Kim', 'Kanye', 'Obama', 'Hans'], 2)
 *    // → ['Matt', 'Kanye', 'Hans']
 */
function everyNPerson(people, n) {
  const newArray = [];
  if (n == 0) {
    return people;
  }
  people.map((peeps, i) => {
    if (i == 0 || i % n == 0) {
      newArray.push(peeps);
    }
  });
  return newArray;
}

/**
 * Returns an array where each entry is the person's intials
 * @param {string[]} people
 * @returns {string[]} intials array
 *
 * @example
 *    initials(['Kanye West', 'Barack Obama'])
 *    // → ['KW', 'BO']
 */
function initials(people) {
  const initialsArray = [];
  people.map(peeps => {
    let init = '';
    let names = peeps.split(' ');
    names.forEach(name => {
      init += name[0];
    });
    initialsArray.push(init);
  });
  return initialsArray;
}

/**
 * Returns an array where every person is prepended with their position in the array
 * @param {string[]} people
 * @returns {string[]}
 *
 * @example
 *    peopleWithPosition(['Kanye', 'Barack'])
 *    // → ['1. Kanye', '2. Barack']
 */
function peopleWithPosition(people) {
  const positionArray = [];
  people.map((peeps, i) => positionArray.push(`${i}: ${peeps}`));
  return positionArray;
}

/**
 * Sorts `people` by first name
 * @param {string[]} people
 * @returns {string[]} sorted array
 */
function sortByFirstName(people) {
  const firstName = people.sort();
  return firstName;
}

/**
 * Sorts `people` by last name
 * @param {string[]} people
 * @returns {string[]} sorted array
 */
function sortByLastName(people) {
  const lastName = [];
  people.map(peeps => {
    let names = peeps.split(' ');
    lastName.push(names[1]);
  });
  return lastName.sort();
}

/**
 * Counts all the characters in the people array (including spaces)
 * @param {Array} people Array of names
 * @return Number of characters
 */
function countTotalCharacters(people) {
  let count = 0;
  people.map(peeps => {
    count += peeps.length;
  });
  return count;
}

/**
 * Returns `true` if everyone in `people` has `letter` in their name.
 * Returns `false` otherwise
 * @param {string[]} people
 * @param {string} letter
 * @returns {boolean}
 */
function everyoneHasLetter(people, letter) {
  let answer = true;
  people.map(peeps => {
    if (!peeps.includes(letter)) answer = false;
  });
  return answer;
}

/**
 * Returns `true` if at least one person has `letter` in their name.
 * Returns `false` otherwise
 * @param {string[]} people
 * @param {string} letter
 * @returns {boolean}
 */
function someoneHasLetter(people, letter) {
  let answer = false;
  people.map(peeps => {
    if (peeps.includes(letter)) answer = true;
  });
  return answer;
}

module.exports = {
  filterByLength,
  everyNPerson,
  initials,
  sortByFirstName,
  sortByLastName,
  countTotalCharacters,
  everyoneHasLetter,
  someoneHasLetter,
  peopleWithPosition,
};
