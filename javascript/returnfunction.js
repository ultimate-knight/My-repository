//Return function//
function sum(a,b){
    return a+b;
}
result=sum(90,90);
alert(result);

//another same program with if//
function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
  }
  
  let age = prompt('How old are you?', 18);
  
  if ( checkAge(age) ) {
    alert( 'Access granted' );
  } else {
    alert( 'Access denied' );
  }

  //Program3//
  function doNothing() { /* empty */ }

alert( doNothing() === undefined ); // true


//showMessage(..)     // shows a message//
//getAge(..)          // returns the age (gets it somehow)//
//calcSum(..)         // calculates a sum and returns the result//
//createForm(..)      // creates a form (and usually returns it)//
//checkPermission(..) // checks a permission, returns true/false//
  
