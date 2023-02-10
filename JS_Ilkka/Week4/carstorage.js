'use strict';

const cars=require('./cars.json');

function getWithLicence(licence) {
    for(const car of cars){
        if(car.licence===licence){
            return car;
        }
    }
    return null;
}

// This code is the same as under, but shorter
function getWithModel(model) {
    return cars.filter(car => car.model===model);
}


// function getWithModel(model) {
//     const carsFound=[];
//     for(const car of cars){
//         if (car.model===model){
//             carsFound.push(car);
//         }
//     }
//     return carsFound;
// }

function getAllModels(){
    const models=[];
    for(const car of cars){
        if(car.model && !models.includes(car.model)) // if car.model exists and the model is already in answer-array
            models.push(car.model);
    }
    return models;
}

function getCars(key, value){
    const found=[];
    for(const car of cars){
        if(car[key]===value){
            found.push(car);
        }
    }
    return found;
}


// Make a libraly from this file
module.exports = { getWithLicence, getWithModel, getAllModels, getCars }