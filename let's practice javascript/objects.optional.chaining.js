//optional chaining//
let user={};
alert(user?.address?.street);//The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.//*/




let html = document.querySelector('.elem')?.innerHTML; //document.queryselector example//


let user = null;
alert( user?.address ); // undefined
alert( user?.address.street ); // undefined*/


//short circuits//
let user=null;
let x=0;
user?.sayhi(x++); // no "user", so the execution doesn't reach sayHi call and x++
alert(x);// 0, value not incremented//*/


//other variants () []//
let userAdmin = {
    admin() {
      alert("I am admin");
    }
  };
  let userGuest = {};
  userAdmin.admin?.(); // I am admin
  userGuest.admin?.(); // nothing happens (no such method)





  let key = "firstName";
  let user1 = {
    firstName: "John"
  };
  let user2 = null;
  alert( user1?.[key] ); // John
  alert( user2?.[key] ); // undefined*/
