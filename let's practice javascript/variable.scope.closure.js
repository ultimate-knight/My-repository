//Code blocks//
{
    let message="hello";//If a variable is declared inside a code block {...}, it’s only visible inside that block.//
    alert(message);
}
alert(message);//// Error: message is not defined//
*/




{
    // show message
    let message = "Hello";//We can use this to isolate a piece of code that does its own task, with variables that only belong to it://
    alert(message);
  }
  
  {
    // show another message
    let message = "Goodbye";
    alert(message);
  }*/


  let message="hello";
  alert(message);//Please note, without separate blocks there would be an error, if we use let with the existing variable name://
  let message="hi";
  alert(message);*/


  if (true) {
    let phrase = "Hello!";
  
    alert(phrase); // Hello!
  }
  
  alert(phrase); // Error, no such variable!




  for (let i = 0; i < 3; i++) {
    // the variable i is only visible inside this for
    alert(i); // 0, then 1, then 2
  }
  alert(i); // Error, no such variable*/


//Nested functions//
/*function makeCounter(){
    let count=0;

    return function(){
        return count++;
    }
}
let counter=makeCounter();
    alert(counter());
    alert(counter());
    alert(counter());*/


//Lexical Environment//

  
  
  