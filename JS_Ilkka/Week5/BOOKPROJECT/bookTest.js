'use strict';

const library=require('./books.json');

console.log(library[0].books);
console.log(library[0].books[0].name);

// console.log('##### firts person #####')
// for(const book of library[0].books){
//     console.log(`${book.name}, ${book.price}€`)
// }

console.log('');
console.log('##### all persons, all books #####');

for(const person of library){
    console.log('');
    console.log(person.firstname, person.lastname)
    for(const book of person.books){
        console.log(`\t ${book.name}, ${book.price}€`)
    }
}

console.log('### Total number of pages per person');
for(const person of library){
    let total_pages = 0;
    for(const book of person.books){
        total_pages += book.pages;
    }
    console.log(`${person.firstname} ${person.lastname}: ${total_pages} pages`)
}

