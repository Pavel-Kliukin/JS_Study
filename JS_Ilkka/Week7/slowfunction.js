'use strict';

function slowRandomLengthOperation(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('resolved'),Math.random()*4500); //0-1.5s

        setTimeout(()=>reject('rejected'),Math.random()*2000); //0-2s
    });
}

//console.log(slowRandomLengthOperation()); //pending
//slowRandomLengthOperation().then(console.log).catch(console.log);

async function test(){
    try{
        const result =  await slowRandomLengthOperation();
        console.log('result:',result);
        console.log('something');
    }
    catch(error){
        console.log('error:',error);
    }
    console.log('past the try-catch');
}

//test();

// Promise.all([slowRandomLengthOperation(), slowRandomLengthOperation()])
//     .then(console.log)
//     .catch(console.log);

// Promise.any([slowRandomLengthOperation(), slowRandomLengthOperation()])
//     .then(console.log)
//     .catch(console.log);