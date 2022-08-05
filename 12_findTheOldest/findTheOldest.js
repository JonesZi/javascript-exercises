const findTheOldest = function(array) {
    array.forEach(element => {
        if (!element.yearOfDeath) {
            element.yearOfDeath = new Date().getFullYear();
        }
        
    });
    const sorted = array.sort((a,b) => {
        const aAge = a.yearOfDeath - a.yearOfBirth;
        const bAge = b.yearOfDeath - b.yearOfBirth;
        return aAge > bAge ? -1 : 1;
    })
    return sorted[0];

};

const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
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

  console.table(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
