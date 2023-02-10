'use strict';

// Use library carstorage
const { 
    getWithLicence, 
    getWithModel, 
    getAllModels,
    getCars } = require('./carstorage');

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

// console.log(getAllModels());

// console.log(`\nAll available models:\n\t${getAllModels().join('\n\t')}`);

console.log(getCars('model','Errare'));
const found=getCars('model','Errare');
if(found.length>0){
    console.log(found[0].licence);
}
console.log('##### Fast GTs #######')
for(const car of getCars('model', 'Fast GT')){
    console.log(car.licence)
}
// Output:
// ##### Fast GTs #######
// ABC-1
// HIK-345

console.log('##### model x #####');
console.log(getCars('model', 'x'))
// Output:
// ##### model x #####
// []

console.log('##### licence #####');
console.log(getCars('licence', 'ABC-1'));
// Output:
// ##### licence #####
// [ { model: 'Fast GT', licence: 'ABC-1' } ]

