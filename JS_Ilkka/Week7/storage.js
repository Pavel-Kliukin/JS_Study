'use strict';

function getPerson(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve({firstname:'Matt', age:20}), Math.random()*1000);

        setTimeout(()=>reject({error:'not found'}),Math.random()*1000);
    });
};


// getPerson()
//     .then(person=>{
//         console.log('name',person.firstname);
//         console.log('age next year will be', person.age+1);}
//     )  
//     .catch(err=>console.log(err.error));

(async ()=>{
    try{
        const person=await getPerson();
        console.log('name', person.firstname);
        console.log('age next year will be', person.age + 1);
    }
    catch(err){
        console.log(err.error);
    }
})();