'use strict';

const allowedOps = '+-x/';

if(process.argv.length !== 5){
    console.log('Not enough data');
}
else{
    const [, , numberA, op, numberB]=process.argv;

    if(!allowedOps.includes(op)){
        console.log('wrong op')
    }
    else{
        if (op==='+'){
            console.log(numberA,' + ',numberB,' = ', +numberA + +numberB);
        }
        if (op==='-'){
            console.log(numberA,' - ',numberB,' = ', +numberA - +numberB);
        }
        if (op==='x'){
            console.log(numberA,' x ',numberB,' = ', +numberA * +numberB);
        }
        if (op==='/'){
            console.log(numberA,' / ',numberB,' = ', +numberA / +numberB);
        }
    }
}