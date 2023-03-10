
document.addEventListener('DOMContentLoaded', init);

let idField;
let nameField;
let typeField;
let processorField;
let amountField;
let resultElement;

function init(){
    idField = document.getElementById('id');
    nameField = document.getElementById('name');
    typeField = document.getElementById('type');
    processorField = document.getElementById('processor');
    amountField = document.getElementById('amount');
    resultElement = document.getElementById('result');

    document.querySelector('button')
        .addEventListener('click', submit);
}

async function submit(){
    const computer = {
        id:+idField.value,
        name:nameField.value,
        type: typeField.value,
        processor: processorField.value,
        amount: +amountField.value
    }

    const options={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(computer)
    };

    const data = await fetch('/inputspa', options);
    const jsonData = await data.json();

    resultElement.textContent = JSON.stringify(jsonData,null,4);
}

