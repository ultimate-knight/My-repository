//Arrow Function//
let sum=(a,b) => (a+b);
alert(sum(1,2));



let double=n => (n*3);//if there are single argument//
alert(double(3));
let double=() => alert("hello");
double();


let age=prompt("what is ur age.?");
let welcome=(age<18) ?
() => alert("hello"):
() => alert("greetings");
welcome();




//Multi-line arrow function//
let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };
  
  alert( sum(1, 2) ); // 3*/



