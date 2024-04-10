//Function binding//
/*let user={
    firstname: "john",
    sayhi(){
        alert(`"hello",${this.firstname}!`);
    }
};
setTimeout(user.sayhi, 1000);




let user1={
    firstname: "maaz",
    saybye(){
        alert(`"hello", ${this.lastname}!`);
    }
};
setTimeout(function(){
    user.saybye();
}, 1000);*/




//Solution2: bind//
/*let user={
    firstname: "maaz",
}
function func(){
    alert("how are u");
}
let funcuser=func.bind(user);
funcuser();
*/


/*let user={
    name: "maaz",
}
function user2(phrase){
    alert(phrase+','+this.name);
}
funcuser=user2.bind(user);
funcuser("hi");*/



/*let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
  };
  
  let sayHi = user.sayHi.bind(user); // (*)
  
  // can run it without an object
  sayHi(); // Hello, John!
  
  setTimeout(sayHi, 1000); // Hello, John!
  
  // even if the value of user changes within 1 second
  // sayHi uses the pre-bound value which is reference to the old user object
  user = {
    sayHi() { alert("Another user in setTimeout!"); }
  };*/






  /*let user = {
    firstName: "John",
    say(phrase) {
      alert(`${phrase}, ${this.firstName}!`);
    }
  };
  
  let say = user.say.bind(user);
  
  say("Hello"); // Hello, John! ("Hello" argument is passed to say)
  say("Bye"); // Bye, John! ("Bye" is passed to say)
  */



  //partial functions//
  /*function mul(a,b){
    return a*b;
  }
  double=mul.bind(null,9);
  alert(double(2));
  alert(double(3));
  alert(double(4));
  alert(double(5));
  alert(double(6));*/






//Going partial without context//

  function partial(func, ...argsBound) {
    return function(...args) { // (*)
      return func.call(this, ...argsBound, ...args);
    }
  }
  
  // Usage:
  let user = {
    firstName: "John",
    say(time, phrase) {
      alert(`[${time}] ${this.firstName}: ${phrase}!`);
    }
  };
  
  // add a partial method with fixed time
  user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());
  
  user.sayNow("Hello");




