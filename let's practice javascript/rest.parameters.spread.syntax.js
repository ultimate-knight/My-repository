//Rest parameters and spread syntax//
function sum(a, b){
    return(a+b);
}
alert(sum(1,2,3,4,5));*/


function sumAll(...args){
    let sum=0;
    for(let arg of args){
        sum+=args;
        return sum;
}
}
    alert(sumAll(1));
    alert(sumAll(1,2));
    alert(sumAll(1,2,3,4,5));*/






function showName(firstName, lastName, ...titles) {
    alert( firstName + ' ' + lastName ); // Julius Caesar
      
        // the rest go into titles array
        // i.e. titles = ["Consul", "Imperator"]
    alert( titles[0] ); // Consul
    alert( titles[1] ); // Imperator
    alert( titles.length ); // 2
      }
      
    showName("Julius", "Caesar", "Consul", "Imperator");*/
      
//The “arguments” variable//

function showName() {
    alert( arguments.length );
    alert( arguments[0] );
    alert( arguments[1] );
  
    // it's iterable
    // for(let arg of arguments) alert(arg);
  }
  
  // shows: 2, Julius, Caesar
  showName("Julius", "Caesar");
  
  // shows: 1, Ilya, undefined (no second argument)
  showName("Ilya");*/





//SPREAD SYNTAX//

let arr = [3, 5, 1];
alert( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)*/


let arr1=[2,3,-1];
let arr2=[4,6,9];
alert(Math.max(...arr1, ...arr2));*/


let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];//We can even combine the spread syntax with normal values://
alert( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25*/



let arr = [3, 5, 1];
let arr2 = [8, 9, 15];
let merged = [0, ...arr, 2, ...arr2];
alert(merged); // 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)*/




let str = "Hello";
alert( [...str] ); // H,e,l,l,o//For instance, here we use the spread syntax to turn the string into array of characters://


/*Note: But there’s a subtle difference between Array.from(obj) and [...obj]:
Array.from operates on both array-likes and iterables.
The spread syntax works only with iterables.
So, for the task of turning something into an array, Array.from tends to be more universal.
*/





//Copy an array/object//

let arr = [1, 2, 3];
let arrCopy = [...arr]; // spread the array into a list of parameters
                        // then put the result into a new array
// do the arrays have the same contents?
alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true
// are the arrays equal?
alert(arr === arrCopy); // false (not same reference)
// modifying our initial array does not modify the copy:
arr.push(4);
alert(arr); // 1, 2, 3, 4
alert(arrCopy); // 1, 2, 3



let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj }; // spread the object into a list of parameters
                          // then return the result in a new object
// do the objects have the same contents?
alert(JSON.stringify(obj) === JSON.stringify(objCopy)); // true
// are the objects equal?
alert(obj === objCopy); // false (not same reference)
// modifying our initial object does not modify the copy:
obj.d = 4;
alert(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
alert(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3






