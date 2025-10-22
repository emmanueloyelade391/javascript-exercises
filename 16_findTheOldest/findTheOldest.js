const findTheOldest = function(array) {
  currentYear = new Date();
  currentYear = currentYear.getFullYear();

  array.sort((a, b) => {
    if ("yearOfDeath" in a === false) {
      return ((currentYear - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth));
    }

    if ("yearOfDeath" in b === false) {
      return ((a.yearOfDeath - a.yearOfBirth) - (currentYear - b.yearOfBirth));
    }
    
    return (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth);
  });
  
  return array.at(-1);
}

const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
