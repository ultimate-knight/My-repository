//local variables//
/*function showmessage() {
    alert("hi tim");
}
showmessage();
showmessage();
showmessage();
showmessage();*/


//outer variables//
/*let name="john";

function showmessage() {
    let message=`hello, ${name}`;
    alert(message);
}

showmessage();
showmessage();
showmessage();*/




/*let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function*/




//parameters//
/*function showMessage(from, text) {

    alert(from+ ":" +'hello');
    alert("how are u doing"+ ":" +text);

}
showMessage('maaz', 'john');






function showMessage(from, text) {
    from='*' +from+ '*';
    alert(from+ ":" +text);

}
let from="maaz";
showMessage(from, "hello");
alert(from);*/



//Default value//
/*function showMessage(from, text) {
    alert(from+ ":" +text);//here if the argument for text is not passed but only the argument for from then the output will return undefined for text//
}
showMessage("maaz");*/



/*function showsomething(from) {
    if(from==undefined) {
        from="it won't show anything";//We can check if the parameter is passed during the function execution, by comparing it with undefined://
    }
    alert(from);

}
showsomething();*/



/*function showcount(from) {
    alert(from ?? "unknown");//Modern JavaScript engines support the nullish coalescing operator ??, it’s better when most falsy values, such as 0, should be considered “normal”://
}
showcount(0);
showcount("hakka");
showcount(null);*/




//Returning a value//
/*function sum(a,b) {
    return a+b;
}
let result=sum(1,2);
alert(result);*/



function checkAge(age) {
    if(age>=18) {
        return true ;
    }else {
        return confirm("Do u have permission from ur parents")

    }
}
let age=prompt("What is ur age.?");
if(checkAge(age)) {
    alert("Access granted");
}else {
    alert("Access denied");
}




//Naming a function//
/*Note: showMessage(..)     // shows a message
getAge(..)          // returns the age (gets it somehow)
calcSum(..)         // calculates a sum and returns the result
createForm(..)      // creates a form (and usually returns it)
checkPermission(..) // checks a permission, returns true/false
