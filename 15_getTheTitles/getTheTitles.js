const getTheTitles = function(array) {
let results = []
for (let item of array) {
  let title = item.title;
  results.push(title);
}

return results;
};

const books = [
  {
    title: "Book", 
    author: "Name"
  },
  {
    title: "Book2",
    author: "Name2"
  }
];

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
