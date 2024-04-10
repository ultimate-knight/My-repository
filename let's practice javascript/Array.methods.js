//Splice//

let arr=[12, 45, 78];
delete arr[1];//How to delete an element from the array?The arrays are objects, so we can try to use delete://
alert(arr[1]);//The element was removed, but the array still has 3 elements, we can see that arr.length == 3.//
alert(arr.length);*/


let arr23=[34, 56, 90];
arr23.splice(1, 1);//The arr.splice method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.//
alert(arr23);//It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.//
*/


let arr30=["let's", "get's", "set's", "wet's", "red's"];//// remove 3 first elements and replace them with another//
arr30.splice(0,3, "hell's", "rel's");
alert(arr30);
*/



let arr34=["mathilda", "crescent", "canwood", "creklakter"];
let remove=arr34.splice(0, 2);//Here we can see that splice returns the array of removed elements://
alert(remove);
arr34.splice(2,0, "leapscholar", "gertuhel");//The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0://
alert(arr34);
*/



let arr35=[34, 89, 90];
arr35.splice(-1, 0, 90, 45);//from index -1 (one step from the end) delete 0 elements,then insert 3 and 4//
alert(arr35);
*/



//slice//

let arr40=["t", "r", "g", "o"];
alert(arr40.slice(1, 3));//It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed.It’s similar to a string method str.slice, but instead of substrings it makes subarrays.alert(arr40.slice(-2));//
alert(arr40.slice(-2));
 */


//concat//

let arr90=[3,4,5];//The method arr.concat creates a new array that includes values from other arrays and additional items.//
alert(arr90.concat([9,6]));//It accepts any number of arguments – either arrays or values.The result is a new array containing items from arr, then arg1, arg2 etc.If an argument argN is an array, then all its elements are copied. Otherwise, the argument itself is copied.//
alert(arr90.concat([10, 18], [12, 34]));
*/


let arr27=[1,2,4,5];
let arrayfirst={
    0: "biontech",
    1: "maaz",
    [Symbol.isConcatSpreadable]: true,//But if an array-like object has a special Symbol.isConcatSpreadable property, then it’s treated as an array by concat: its elements are added instead://
    length: 2
};
alert(arr27.concat(arrayfirst));
 */





//Iterate: foreach//

['meinf', 'kematu', 'lionerz'].forEach(alert);//
['meinf', 'kematu', 'lionerz'].forEach((item, index, array) => {
    alert(`${item} at ${index} in ${array}`);//The arr.forEach method allows to run a function for every element of the array.//

})
  */


//Searching in array//

let arr=[12,60,true,60];
alert(arr.indexOf(true));
alert(arr.indexOf(12));//arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.//
alert(arr.indexOf(60));//Usually these methods are used with only one argument: the item to search. By default, the search is from the beginning.//
alert(arr.includes(3));//arr.includes(item, from) – looks for item starting from index from, returns true if found//
alert(arr.lastIndexOf(60));//The method arr.lastIndexOf is the same as indexOf, but looks for from right to left.//
*/


let users=[
    {id: 1, name: "maaz"},
    {id: 2, name: "baqtiyaar"},
    {id: 3, name: "lindsay"},
]
let user=users.find(item => item.id==2 );//The function is called for elements of the array, one after anotheritem is the element.index is its index.
//array is the array itself.If it returns true, the search is stopped, the item is returned. If nothing found, undefined is returned.For example, we have an array of users, each with the fields id and name. Let’s find the one with id == 1://
alert(user.name);*/




let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"}
  ];
  // Find the index of the first John
  alert(users.findIndex(user => user.name == 'John')); // 0 
  // Find the index of the last John
  alert(users.findLastIndex(user => user.name == 'John')); // 3
  */


  let user45=[
    {id: 1, name: "john"},
    {id: 2, name: "maaz"},
    {id: 3, name: "cratel"}
  ]
  let somepeople=user45.filter(item => item.id<3);
  alert(somepeople.length);*/







  //Transform an Array//
  let lengths=["bilbo", "gandalf", "graznier"].map(item => item.length);//The arr.map method is one of the most useful and often used.It calls the function for each element of the array and returns the array of results.//
  alert(lengths);


  let arr=[1,4,67,89,90,98,88,45];
  alert(arr.sort());//The call to arr.sort() sorts the array in place, changing its element order.It also returns the sorted array, but the returned value is usually ignored, as arr itself is modified.//
*/
   


  function CompareNumeric(a,b) {
    if (a<b) return -1;
    if(a>b) return 1;//
    if(a==b) return 0;

  }
  let arr98=[23,45,78,90,98];
  arr98.sort(CompareNumeric);
  alert(arr98);*/



  //reverse//

  let arr=[12,67,98,90,78,34];
  alert(arr.reverse());*/



  //split and join//
  let names="tony, anderson, howards";
  let arr=names.split(', ');
  for(let name of arr) {
    alert(`send message to ${name}`);
  }*/


let arr12 = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
alert(arr12); // Bilbo, Gandalf


let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
let str = arr.join(';'); // glue the array into a string using ;
alert( str ); // Bilbo;Gandalf;Nazgul
*/



//reduce right//

let arr19 = [1, 2, 3, 4, 5];
let result = arr19.reduce((sum, current) => sum + current, 0);
alert(result); // 15


//Array.isArray//

alert(typeof {}); // object
alert(typeof []); // object (same)


alert(Array.isArray({})); // false
alert(Array.isArray([])); // true

  
  



