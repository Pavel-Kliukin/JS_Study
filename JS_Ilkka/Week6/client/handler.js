'use strict';

(function(){

    let nameField;
    let resultarea;

    document.addEventListener('DOMContentLoaded', init);

    function init(){
        nameField=document.getElementById('name');
        resultarea=document.getElementById('result');

        document.getElementById('searchowner')
            .addEventListener('click', ()=>search('owner','name'));
        document.getElementById('searchbooks')
            .addEventListener('click', ()=>search('booknames','value'));
    }

    async function search(route,key){
        const value=nameField.value;
        const url = `http://localhost:3000/${route}?${key}=${value}`;
        const data = await fetch(url,{mode:'cors'});
        const jsonData= await data.json();
        resultarea.textContent=JSON.stringify(jsonData,null,2);
    }

})();