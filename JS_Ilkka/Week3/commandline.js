'use strict';

let a='abc';
//console.log(process.argv);
const args=process.argv;

for(let i=0; i<args.length; i++){
    console.log(`args[${i}]={args[i]}`)
}

console.log(args.length)