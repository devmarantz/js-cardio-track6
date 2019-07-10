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

function sortByLastName(people) {
  const lastName = [];
  people.map((peeps, i) => {
    let names = peeps.split(' ');
    lastName.push(names[1]);
  });
  lastName.sort();
  console.log(lastName);
  lastName.filter((peeps, i) => {
    people.map(fullName => {
      if (fullName.includes(peeps)) lastName[i] = fullName;
    });
  });
  console.log(lastName);
  return lastName;
}

sortByLastName(peoples);
