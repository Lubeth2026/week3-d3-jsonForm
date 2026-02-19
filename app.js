'use strict';

const textarea = document.querySelector("#jsonData");


const input = document.getElementById("input");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const input5 = document.getElementById("input5");

const jsonFORM = document.getElementById("jsonFORM");
console.log(jsonFORM);

jsonFORM.addEventListener("render",function(event){
    event.preventDefault();
    console.log(event)
    console.log(jsonFORM.jsonData.value);
    try {
        const items = JSON.parse(jsonFORM.jsonData.value);
        input.textContent = items[0];
        input2.textContent = items[2];
        input3.textContent = items[3];
        input4.textContent = items[4];
        input5.textContent = items[5];
        console.log(items);
    } catch (error) {
       input.textContent = "Check your work!"
       input2.textContent = ""
       input3.textContent = ""
       input4.textContent = ""
       input5.textContent = ""
    }
})