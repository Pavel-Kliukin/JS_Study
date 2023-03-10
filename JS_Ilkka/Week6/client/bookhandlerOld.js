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
            .addEventListener('click',searchbooks);
        document.getElementById('searchnames')
            .addEventListener('click', searchnames);
        document.getElementById('searchtotals')
            .addEventListener('click', searchtotals);
    }

    async function searchbooks(){
        const firstname=firstnameField.value;
        const lastname=lastnameField.value;
        const url = `http://localhost:3000/books?firstname=${firstname}&lastname=${lastname}`;
        const data = await fetch(url,{mode:'cors'});
        const jsonData = await data.json();
        resultarea.textContent=JSON.stringify(jsonData,null,2);
    }

    async function searchnames() {
        const firstname = firstnameField.value;
        const lastname = lastnameField.value;
        const url = `http://localhost:3000/names?firstname=${firstname}&lastname=${lastname}`;
        const data = await fetch(url, { mode: 'cors' });
        const jsonData = await data.json();
        resultarea.textContent = JSON.stringify(jsonData, null, 2);
    }

    async function searchtotals() {
        const firstname = firstnameField.value;
        const lastname = lastnameField.value;
        const url = `http://localhost:3000/totals?firstname=${firstname}&lastname=${lastname}`;
        const data = await fetch(url, { mode: 'cors' });
        const jsonData = await data.json();
        resultarea.textContent = JSON.stringify(jsonData, null, 2);
    }

})();