//Arrow function programs//
let sum=(a,b)=>a+b;
alert(sum(1,2));

//If it has one paranthesis//
let double=n=>n*2;
alert(double(3));

//if there are no arguments//
let sayhi=()=>alert("Hello!");
sayhi();

//no arguments//
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();

//Multiple arrow functions//
let sum1 = (a, b) => { 
    let result = a + b;
    return result; 
  };
  
  alert( sum1(1, 2) );