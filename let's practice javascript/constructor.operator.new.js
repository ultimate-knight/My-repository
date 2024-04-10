// constructor function//
function User(name) {
    this.name=name;
    this.isadmin=false;
}
let user=new User("jack");
alert(user.name);
alert(user.isadmin);*/


//Return from constructors//
function BigUser() {
    this.name="hendricks";
    return {name: "andres"};
}
alert(new BigUser().name);*/


function SmallUser() {

    this.name = "John";
  
    return; // <-- returns this
  }
  
  alert( new SmallUser().name );*/  // John



  //Methods in constructors//
  function User(name) {
    this.name = name;
  
    this.sayHi = function() {
      alert( "My name is: " + this.name );
    };
  }
  
  let john = new User("John");
  
  john.sayHi(); 




