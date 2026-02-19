'use strict';

const textarea = document.querySelector("#jsonData");
console.log(document);

const jsonFORM = document.getElementById("jsonFORM");
console.log(jsonFORM);

jsonFORM.addEventListener("render",function(event){
    event.preventDefault();
    console.log(jsonFORM.jsonData.value);
})