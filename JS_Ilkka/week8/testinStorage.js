'use strict';

const { 
    getAllFromStorage, 
    getFromStorage, 
    addToStorage,
    updateStorage,
    removeFromStorage } = require('./storage/storageLayer');

    // getAllFromStorage().then(console.log).catch(console.log);
// getFromStorage(2).then(console.log).catch(console.log);
// getFromStorage(20).then(console.log).catch(console.log);

// addToStorage({
//     "id": 5,
//     "name": "xBigFlop Mark II",
//     "type": "xserver",
//     "processor": "xMinPower",
//     "amount": 499
// }).then(console.log).catch(console.log);

// updateStorage({
//     "id": 4,
//     "name": "BigFlop Mark II",
//     "type": "server",
//     "processor": "MinPower",
//     "amount": 199
// }).then(console.log).catch(console.log);

removeFromStorage(4).then(console.log).catch(console.log);
