"use strict"

// var dob= new Date(11/10/1998)
// console.log(dob);

// let a=Date.now()
// console.log(a);

// let b=dob.getTime();
// console.log(b);

// let c=dob.getUTCFullYear();
// console.log(c);


function calculateage(){
    var input=document.getElementById("date").value;
        var DOB= new Date(input);
        var month=Date.now() - DOB.getTime()
        var age=new Date(month);
        var year=age.getFullYear()
        var calculate=Math.abs(year-1970);
        return document.querySelector(".result").innerText="calculate Age"+calculate+"years."
      }
        

   

// var input =document.getElementById("date");
// var button =document.getElementById("calculate");
// var result=document.querySelector(".result");

// input.max=new Date().toISOString().split("T")[0];
// console.log(input);














