'use strict';

const numbers=[1,2,3,4,5];

console.log(numbers);
console.log(numbers[0]);
console.log('length is ',numbers.length);

numbers[10]=123;
// extend the array with empty items
console.log(numbers,numbers.length);

numbers.length=5;
// trunkate the array

numbers.push(6);
// pushes 1 item at the end

console.log(numbers.pop());
// deletes the last item and return it

//sum of numbers
for(let i=0; i<numbers.length; i++){
    console.log(`numbers[${i}]=${numbers[i]}`);
}

let sum=0;
for (let i=0; i<numbers.length; i++){
    sum=sum+numbers[i]
}
console.log(`${numbers.join(' + ')} = ${sum}`)


let resultString='';
sum=0;
for(let i=0; i<numbers.length; i++){
    sum+=numbers[i]
    resultString+=numbers[i];
    if(i<3){
        resultString+=' + ';
    }
}