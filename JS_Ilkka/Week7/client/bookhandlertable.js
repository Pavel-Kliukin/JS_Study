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

        document.getElementById('search')
            .addEventListener('click',search);    
    }

    async function search(){
        const firstname=firstnameField.value;
        const lastname=lastnameField.value;
        const url = `http://localhost:3000/books?firstname=${firstname}&lastname=${lastname}`;
        const data = await fetch(url,{mode:'cors'});
        const jsonData = await data.json();
        
        resultarea.innerHTML='';
        for(const book of jsonData){
            const tr=document.createElement('tr');
            tr.appendChild(createCell(book.name));
            tr.appendChild(createCell(book.pages));
            tr.appendChild(createCell(book.price));
            resultarea.appendChild(tr);
        }
    } //end of search

    function createCell(text){
        const td=document.createElement('td');
        td.textContent=text;
        return td;
    }





})();