'use strict'

const { getBooksOfPerson,
  getTheNamesOfBooks,
  getTheTotals,
  getTheOwnerOfBook,
  getAllBooks } = require('./bookstorage');

console.log("#### Leila's books #####")
console.log(getBooksOfPerson('Leila', 'Hökki'));
// console.log("#### nobodys books #####")
// console.log(getBooksOfPerson('nobody', 'no'));

console.log(`\n`, "#### Leila's books's names #####")
console.log(getTheNamesOfBooks('Leila', 'Hökki'));

const { getTheTotals } = require('./bookstorage');
console.log(`\n`, "#### Totals #####")
console.log(getTheTotals('Leila', 'Hökki'));

console.log(`\n`, "#### ABC owners #####")
console.log(getTheOwnerOfBook('ABC'));

console.log(`\n`, "#### Books that includes ABC #####")
console.log(getAllBooks('ABC'));

