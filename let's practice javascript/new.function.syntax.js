//The "new Function" syntax//

/*let sayhi=new Function('a','b', 'return a+b');
alert(sayhi(34,55));*/


/*let sayhi=new Function('alert("my name is maaz")');
sayhi()*/



//Closure//

function getFunc() {
    let value = "test";
  
    let func = new Function('alert(value)');
  
    return func;
  }
  
  getFunc()(); // error: value is not defined//






  function getFunc() {
    let value = "test";
  
    let func = function() { alert(value); };
  
    return func;
  }
  
  getFunc()(); // "test", from the Lexical Environment of getFunc





