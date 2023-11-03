//Outer variables//
let username='john';
function showmessage(){
    message='hello,'+username;
    alert(message);
}
showmessage();
//Modifying outer variable//
let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function
//Similar but different program//
let Name = 'John';

function showMessage() {
  let Name = "Bob"; // declare a local variable

  let message = 'Hello, ' + Name; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert( Name ); // John, unchanged, the function did not access the outer variable

