'use strict';

const person = require('./person.json');

console.log(person);
console.log(person.firstname);
console.log(`${person.firstname}, ${person.lastname}`);
console.log(person['firstname']);

let key='firstname';
console.log(person[key]);
key='age';
console.log(person[key]);

console.log(Object.keys(person));
// Output
// [ 'firstname', 'lastname', 'age', 'member' ]


console.log(Object.values(person));
// Output
//[ 'Matt', 'River', 20, true ]

console.log(Object.entries(person));
// Output
// [ 'firstname', 'Matt' ],
// [ 'lastname', 'River' ],
// [ 'age', 20 ],
// [ 'member', true ]

for(const key of Object.keys(person)){
    console.log(`${key}=${person[key]}`);
}
// Output
// firstname=Matt
// lastname=River
// age=20
// member=true

for(const [key, value] of Object.entries(person)){
    console.log(`${key}=${value}`);
}
// Output
// firstname=Matt
// lastname=River
// age=20
// member=true