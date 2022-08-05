const getTheTitles = function(arrOfObj) {
    return arrOfObj.map(e => e.title);
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ];

// Do not edit below this line
module.exports = getTheTitles;
