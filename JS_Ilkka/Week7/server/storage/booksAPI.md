# Books library API

Restriction: Same person can be in json only once.

## **getBooksOfPerson(firstname,lastname)**
-   function returns an array of all book objects of the person.
-   if person has no books, an empty array is returned

## **getTheNamesOfBooks(firstname,lastname)**
-   return an array of book names (strings) of books belonging to given person
-   if person has no books, an empty array is returned

## **getTheTotals(firstname,lastname)**
- return an object consisting total price and total pages with `ok` true
- if the person doesn't exist, an empty object with `ok` is false is returned

```json
{
    "ok":true,
    "totalPrice":0,
    "totalPages":0
}
```

## **getTheOwnerOfBook(bookName)**
The bookName is the whole book name. 
-   returns an array of strings. The string is formed from firstname and lastname: `firstname lastname`
-   if no match is found, an empty array is returned

for book `ABC` function retuns:
```json
["Matt River","Leila Hökki"]
```

## **getAllBooks(substringInName)**
search is case sensitive so ABC <> abc.
-   returns an arry of objects of form:
```json
{"firstname":"", "lastname":"","book":{"name":"","pages":0,"price":0}}
```
for example find books that have `ABC` in their name:
```json
[
    {"firstname":"Matt", "lastname":"River","book":{"name":"ABC", "pages":300, "price":30}},
    {"firstname":"Matt", "lastname":"River","book":{"name":"Testing ABC", "pages":100, "price":45}},
    {"firstname":"Leila", "lastname":"Hökki","book":{"name":"ABC", "pages":200, "price":30}},
    {
        "firstname":"Leila", 
        "lastname":"Hökki",
        "book":{
            "name":"Programming ABC", 
            "pages":50, 
            "price":10
        }
    }
]
```
if no match is found, an empty array is returned.


