//Array Declarations//
/*/*  */let fruits=["apples", "oranges", "banana"];
alert(fruits[0]);
alert(fruits[1]);
alert(fruits[2]);
fruits[2]="watermelon";
fruits[1]="Mangoes";
alert(fruits[1]);
alert(fruits[2]);
alert(fruits.length);
alert(fruits);*/





/*/*  */let arr1=["merkava", {name: "maaz"}, true, function(){alert("hentero")}];
alert(arr1[0]);
alert(arr1[1].name);
alert(arr1[2]);
arr1[3]();*/





//Get last element with "at"//

/*/*  */let cars=["alto", "swift", "scorpio"];
alert(cars[cars.length-1]);
alert(cars.at(-1));*/



//Methods pop/push, shift/unshift//

/*/*  */let books=["pinnochio", "harris-novel", "jk rowling"];
books.pop();//it removes the last element from array//
alert(books);
books.push("jungle-book");
alert(books);
books.unshift("snowhite");//Add the element to the beginning of the array://
alert(books);*/





//Internals//

let snacks=["cake"];
let sweets=snacks;
alert(sweets===snacks);//An array is a special kind of object. The square brackets used to access a property arr[0] actually come from the object syntax. That’s essentially the same as obj[key], where arr is the object, while numbers are used as keys.//
sweets.push("pastry");
alert(snacks);
alert(sweets);*/





//loops//

/*/*  */let arr=['hiking', 'trekking', 'zorbing'];
for(let i=0; i<arr.length; i++) {
    alert(arr[i]);//One of the oldest ways to cycle array items is the for loop over indexes://
}
for(let array of arr) {
    alert(array);//The loop for..in iterates over all properties, not only the numeric ones.The for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower. Of course, it’s still very fast. The speedup may only matter in bottlenecks. But still we should be aware of the difference.//
}*/






//A word about “length”//

/*/*  */let crooks=[];
crooks[223]=['langstorn'];//The length property automatically updates when we modify the array. To be precise, it is actually not the count of values in the array, but the greatest numeric index plus one.//
alert(crooks.length);*/


/*/*  */
let auto=[12, 34, 55, 78, 90];
auto.length=2;
alert(auto);//Another interesting thing about the length property is that it’s writable.If we increase it manually, nothing interesting happens. But if we decrease it, the array is truncated. The process is irreversible//
auto.length=5;
alert(auto[3]);//The elements at indices 2 and 3 were removed during the truncation, so arr[3] is undefined because there is no element at that index in the current array. It's important to note that resetting the length of the array does not restore the removed elements; it simply adjusts the length property. If you want to restore the elements, you need to explicitly assign values to the array elements.//
*/








//new Array()//

/*/*  */let arr = new Array(2); // will it create an array of [2] ?

alert( arr[0] ); // undefined! no elements.//If new Array is called with a single argument which is a number, then it creates an array without items, but with the given length.//

alert( arr.length ); // length 2
*/




//Multidimensional arrays//

/*/*  */let matrix=[
    [13, 24, 56],
    [24, 56, 78],
    [34, 67, 89],

]
alert(matrix[0][2]);//Arrays can have items that are also arrays. We can use it for multidimensional arrays, for example to store matrices://

*/







//toString//

/*/*  */let arr25=[12, 23, 67];
alert(arr25);
alert(String(arr25));
alert(String(arr25)==arr25);//Arrays have their own implementation of toString method that returns a comma-separated list of elements.For instance://
alert([[]+1]);
alert([1]+1);//Arrays do not have Symbol.toPrimitive, neither a viable valueOf, they implement only toString conversion, so here [] becomes an empty string, [1] becomes "1" and [1,2] becomes "1,2".//
alert([1,3]+1);
*/


/*/*  */
alert( "" + 1 ); // "1"
alert( "1" + 1 ); // "11"//When the binary plus "+" operator adds something to a string, it converts it to a string as well, so the next step looks like this://
alert( "1,2" + 1 ); // "1,21"
*/







//Don’t compare arrays with ==//

alert([]==[]);
alert([3]==[3]);//These arrays are technically different objects. So they aren’t equal. The == operator doesn’t do item-by-item comparison.//
alert(0==[]);
alert("12"==[]);//false////Here, in both cases, we compare a primitive with an array object. So the array [] gets converted to primitive for the purpose of comparison and becomes an empty string ''.//
alert( 0 == '' ); // true, as '' becomes converted to number 0//
alert('0' == '' ); // false, no type conversion, different strings//
















