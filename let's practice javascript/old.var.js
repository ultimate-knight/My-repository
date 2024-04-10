//"var" has no block scope//
/*if(true){
    var test=true;
}
alert(test);*/


/*if(true){
    let test=true;
}
alert(test);*/



/*for(var i=0; i<10; i++){
    one=1;
}
alert(one);
alert(i);*/


/*function sayhi(){
    if(true){
        var hey="hello";
    }
    alert(hey);
}
sayhi();
alert(hey);*/


//“var” tolerates redeclarations//

/*var user = "Pete";
var user = "John"; // this "var" does nothing (already declared)
// ...it doesn't trigger an error
alert(user); // John*/


//“var” variables can be declared below their use//

function sayHi() {
    phrase = "Hello";
    alert(phrase);
    var phrase;
  }
  sayHi();



  // Ways to create IIFE

(function() {
    alert("Parentheses around the function");
  })();
  
  (function() {
    alert("Parentheses around the whole thing");//In the past, as there was only var, and it has no block-level visibility, programmers invented a way to emulate it. What they did was called “immediately-invoked function expressions” (abbreviated as IIFE). That’s not something we should use nowadays, but you can find them in old scripts.//
  }());
  
  !function() {
    alert("Bitwise NOT operator starts the expression");
  }();
  
  +function() {
    alert("Unary plus starts the expression");
  }();
  