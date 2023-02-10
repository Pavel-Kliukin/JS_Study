'use strict';

const library=require('./books.json')

function getBooksOfPerson(firstname, lastname) {
    for(const person of library){
        if(person.firstname===firstname && person.lastname===lastname){
            return person.books;
        }
    }
    return [];
}

function getTheNamesOfBooks(firstname, lastname) {
    for(const person of library){
        const booksList = [];
        if(person.firstname===firstname && person.lastname===lastname){
            for(const book of person.books){
                booksList.push(book.name)
            }
            return booksList;
        }
    }
}

function getTheTotals(firstname, lastname) {
   for(const person of library){
        if(person.firstname===firstname && person.lastname===lastname){
            let totals =  {
                ok: true,
                totalPrice: 0,
                totalPages: 0
            }
            for(const book of person.books){
                totals.totalPrice += book.price;
                totals.totalPages += book.pages;
            }
            return totals;
        }
   }
   return {
    ok:false,
    totalPrice: 0,
    totalPages: 0
};
}

function getTheOwnerOfBook(bookName) {
    let bookOwners = [];
    for(const person of library){
        for(const book of person.books){
            if(book.name===bookName){
                bookOwners.push(`${person.firstname} ${person.lastname}`);
            }
        }
        
    }
    return bookOwners
}

function getAllBooks(substringInName){
    const found=[];
    for(const person of library){
        for(const book of person.books){
            if(book.name.includes(substringInName)){
                found.push({
                    firstname:person.firstname,
                    lastname:person.lastname,
                    book:book
                });
            }
        }
    }
    return found;
}

module.exports={getBooksOfPerson, getTheNamesOfBooks, getTheTotals, getTheOwnerOfBook, getAllBooks};
