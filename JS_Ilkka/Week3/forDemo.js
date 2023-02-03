'use strict';


const names=['Matt', 'Marry', 'Ann', 'John', 'Jesse', 'Vera'];

const friends=['Matt', 'Vera', 'Mary', 'Pete'];

// find coincidences in arrays
const commonNames = names.filter(firstname => friends.includes(firstname));
console.log(commonNames);


function findTheNumberOfCommonFriends(liatA, listB){
    return liatA.filter(firstname => listB.includes(firstname)).length
}

console.log(`we have ${findTheNumberOfCommonFriends(names, friends)} friends in common`);

//Do the same as code above
const result=[];
for (const person of names){
    if (friends.includes(person)){
        result.push(person);
    }
}
console.log('result:', result)
console.log(result.length);
