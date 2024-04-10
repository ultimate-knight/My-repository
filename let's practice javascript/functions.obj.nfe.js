//The “name” property//

/*function sayhi(){
    alert("hi");//Function objects contain some useable properties.For instance, a function’s name is accessible as the “name” property://
}
alert(sayhi.name);




let sayhi=function(){
    alert("sayhi");
}
alert(sayhi.name);*/


/*function f(sayhi=function() {}){
    alert(sayhi.name);
}
f();*/


/*let user={
    sayhi(){
        //...

    },

    saybye: function(){
        //...

    }
}
alert(user.sayhi.name);
alert(user.saybye.name);*/





//The “length” property//

/*Note: There is another built-in property “length” that returns the number of function parameters, for instance:*/


/*function f1(a) {};
function f2(a,b) {};
function many(a,b,...more) {};//Here we can see that rest parameters are not counted.//
alert(f1.length);
alert(f2.length);
alert(many.length);*/



/*function ask(question, ...handlers) {
    let isYes = confirm(question);
  
    for(let handler of handlers) {
      if (handler.length == 0) {
        if (isYes) handler();
      } else {
        handler(isYes);
      }
    }
  
  }
  // for positive answer, both handlers are called
  // for negative answer, only the second one
  ask("Question?", () => alert('You said yes'), result => alert(result));*/





//Custom properties//

/*function sayhi(){
    alert("hi");
    sayhi.counter++;
}
sayhi.counter=0;//Here we add the counter property to track the total calls count://

sayhi();
sayhi();

alert(`called ${sayhi.counter} times`);*/





/*function makeCounter() {
    // instead of:
    // let count = 0
  
    function counter() {
      return counter.count++;
    };
  
    counter.count = 0;
  
    return counter;
  }
  let counter = makeCounter();
  alert( counter() ); // 0
  alert( counter() ); // 1*/




  //Named Function Expression//


  /*let sayhi=function func(who){
    alert(`hey ${who}`);
  }
  sayhi("john");*/




/*let sayHi = function func(who) {
    if (who) {
      alert(`Hello, ${who}`);
    } else {
      func("Guest"); // use func to re-call itself
    }
  };
  
  sayHi(); // Hello, Guest
  
  // But this won't work:
  func(); // Error, func is not defined (not visible outside of the function)*/




  let sayHi = function func(who) {
    if (who) {
      alert(`Hello, ${who}`);
    } else {
      func("Guest"); // Now all fine
    }
  };
  
  let welcome = sayHi;
  sayHi = null;
  
  welcome(); // Hello, Guest (nested call works)
  

