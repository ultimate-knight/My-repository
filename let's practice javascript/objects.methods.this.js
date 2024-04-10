//Method examples//
let user={
    name: "maaz",
    age: 22,
}

user.sayhi=function() {
    alert("say hello");
}

user.sayhi();*/



let user={
    name: "maaz",
    age: 22,
}
function sayhi() {
    alert("come to me");
}
user.sayhi=sayhi;
user.sayhi();
user.sayhi();
user.sayhi();*/


//this in method//
let user={
    name: "clay",
    age: 65,
    sayhi() {
        alert(this.name)//Here during the execution of user.sayHi(), the value of this will be user.//
        
    }
}
user.sayhi();*/



let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      alert( user.name ); // leads to an error
    }
  };
  let admin = user;
  user = null; // overwrite to make things obvious
  
  admin.sayHi(); // TypeError: Cannot read property 'name' of null*/



  //this is not bound//
  let user={name: "howard"};
  let admin={name: "joseph"};
  function sayhi() {
    alert(this.name);
  }

  user.f=sayhi;
  admin.f=sayhi;

  user.f();
  admin.f();*/




  //Arrow functions have no this//
  let user = {
    firstName: "Ilya",
    sayHi() {
      let arrow = () => alert(this.firstName);
      arrow();
    }
  };
  
  user.sayHi(); // Ilya







