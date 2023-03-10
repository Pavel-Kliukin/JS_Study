'use strict';

const path=require('path');

const storageFilePath = path.join(__dirname,'computers.json');

const { readStorage, writeStorage } = require('./readerWriter');

async function getAllFromStorage(){
    return readStorage(storageFilePath);
}

async function getFromStorage(id){
    return (await readStorage(storageFilePath)).find(item=>item.id==id) || null;
}

async function addToStorage(newObject){
    const storage = await readStorage(storageFilePath);
    storage.push(newObject);
    return await writeStorage(storageFilePath,storage);
}

async function updateStorage(modifiedObject){
    const storage = await readStorage(storageFilePath);
    const oldObject = storage.find(item => item.id == modifiedObject.id);
    if(oldObject){
        Object.assign(oldObject, modifiedObject);
        return await writeStorage(storageFilePath, storage);
    }
    return false;
}

async function removeFromStorage(id){
    const storage = await readStorage(storageFilePath);
    const i = storage.findIndex(item=>item.id==id);
    if(i<0) return false;
    storage.splice(i,1);
    return await writeStorage(storageFilePath, storage);
}

module.exports = {
    getAllFromStorage, 
    getFromStorage, 
    addToStorage,
    updateStorage,
    removeFromStorage}