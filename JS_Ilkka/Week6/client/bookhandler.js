'use strict';

(function(){
    let firstnameField;
    let lastnameField;
    let resultarea;

    document.addEventListener('DOMContentLoaded', init);

    function init(){
        firstnameField=document.getElementById('firstname');
        lastnameField=document.getElementById('lastname');
        resultarea=document.getElementById('result');

        document.getElementById('searchbooks')
            .addEventListener('click',()=>search('books'));
        document.getElementById('searchnames')
            .addEventListener('click', ()=>search('names'));
        document.getElementById('searchtotals')
            .addEventListener('click', ()=>search('totals'));
    }

    async function search(route){
        const firstname=firstnameField.value;
        const lastname=lastnameField.value;
        const url = `http://localhost:3000/${route}?firstname=${firstname}&lastname=${lastname}`;
        const data = await fetch(url,{mode:'cors'});
        const jsonData = await data.json();
        resultarea.textContent=JSON.stringify(jsonData,null,2);
    }
})();