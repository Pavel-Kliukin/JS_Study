'use strict';

// Use library carstorage
const { 
    getWithLicence, 
    getWithModel, 
    getAllModels } = require('./carstorage');

//console.log(getWithLicence('ABC-1'));

const myCar=getWithLicence('A-1');
if(myCar){
    console.log(`My car is ${myCar.model}. The licence is ${myCar.licence}`)
}
else{
    console.log('Car was not found')
}
console.log(getWithModel('Fast GT'));
for (const car of getWithModel('Fast GT')){
    console.log(`${car.model} ${car.licence}`);
}

console.log(getAllModels());