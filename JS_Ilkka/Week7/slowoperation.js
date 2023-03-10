'use strict';

const slowOp = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('slow but steady'),2000) //2000ms = 1s
});

console.log(slowOp);
slowOp.then(result=>console.log(result));
console.log('end');
slowOp
    .then(result=>console.log('2: '+result))
    .then(()=>console.log('Prom2 ended'))
console.log('end2');