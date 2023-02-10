# Books library API

Restriction: Same person can be in json only once.

## **getBooksOfPerson(firstname, lastname)**

- function returns an array of all book objects of the person.
- if person has no books, an empty array is returned.

## **getTheNamesOfBooks(firstname, lastname)**

- returns an array of book names (strings) of books belonging to given person
- if person has no books, an empty array is returned

## **getTheTotals(firstname, lastname)**

- return an object consisting total price and total pages
- if the person doesn't exists, the empty object is returned

```json
{
  "ok": true, //if person exist it's true, otherway it's false
  "totalPrice": 0,
  "totalPages": 0
}
```

## **getTheOwnerOfBook(bookName)**

The bookName is the whole book name.

- returns an array of strings. The string is formed from firstname and lastname: `firstname lastname`
- if no match is found, an empty array is returned

for book `ABC` function returns:

```json
["Matt River", "Leila Hökki"]
```

## **getAllBooks(substringInName)**

-returns an array of objects of form:
(the search is case sensitive, so ABC <> abc)

```json
{
  "firstname": "",
  "lastname": "",
  "book": { "name": "", "pages": 0, "price": 0 }
}
```

for example find books that have `ABC`in their name:

```json
[
  { "name": "ABC", "pages": 300, "price": 30 },
  { "name": "Testing ABC", "pages": 100, "price": 45 },
  { "name": "ABC", "pages": 200, "price": 30 },
  { "name": "Programming ABC", "pages": 50, "price": 10 }
]
```

if no match is found, an empty array is returned
