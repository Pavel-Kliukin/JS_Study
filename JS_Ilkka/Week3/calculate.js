'use strict';

if (process.argv.length !== 5){
    console.log('Not enough data')
}
else {
    const [, , numberA, op, numberB]=process.argv;
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
