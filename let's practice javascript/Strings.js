//Quotes//

function sum(a,b) {
    return a+b;
}
alert(`${sum(1,2)}`);*/



let guestlists=`sofia
mamooth
kramer
pascal
caesar
`;
alert(guestlists);*/



//Special characters//
let guestlist1="guest \njohn \nmaaz \nbaqtiyaar";
alert(guestlist1);*/


let str1="hello\nworld";
let str2=`hello
world`;
alert(str1==str2);*/




//String length//
alert("alergic".length);*/




//Accessing characters//
let str="complimentary";
alert(str[0]);
alert(str.at(0));
alert(str[str.length-1]);
alert(str.at(-1));*/


let str1="baqtiyaar";
alert(str1[-2]);//only .at pos can only executes negative value//
alert(str1.at[-2]);//square brackets at .at position with negative value makes it undefined//
for(let char of "hello") {
    alert(char);
}*/







//Strings are immutable//
let str2="haemoglobin";
str2[0]="a";//Strings can’t be changed in JavaScript. It is impossible to change a character.//
alert(str2[0]);*/


let str3="compliment";
str3="h"+str3[1];
alert(str3);*/








//Changing the case//
alert("interface".toLowerCase());
alert("compliment".toUpperCase());//These functions changes the cases of individual letters in strings//
alert('lionize'[0].toUpperCase());*/








//Searching for a substring//
let str="what is ur name";
alert(str.indexOf("what"));//0, because 'what' is found at the beginning//
alert(str.indexOf("ur"));//It checks the indexes of string//
alert(str.indexOf("name"));*/



let str = 'Widget with id';
alert(str.indexOf("id"));
alert(str.indexOf("with"));*/



let str="As sly as fox as if we are here";
let target="as";
let pos=-1;
while((pos=str.indexOf(target, pos+1))!=-1) {
    alert(pos);
}*/


let str25="whirlpool is best";
if(str25.indexOf("whirlpool")!=-1) {
    alert("we found it");
}
*/



alert("hey man!How are u doing".includes("man"));
alert("jeep compass".startsWith("jeep"));//includes, startsWith, endsWith//
alert("mooneyman".endsWith("man"));
alert("widget".includes("id", 3));*/







//Getting a substring//

let str="baqtiyaar";
alert(str.slice(0, 5));
alert(str.slice(3,7));
alert(str.slice(3));
alert(str.slice(-3,-1));
alert(str.substr(2, 6));
*/





//Comparing strings//
alert('a' > 'z');
alert('A' > 'G');
alert('baqti'>'maaz');
alert("a".codePointAt(0));
alert(String.fromcodePoint(90));//Creates a character by its numeric code//
alert(String.fromCodePoint(0x5a));//(we can also use a hex value as an argument)//*/



let str = '';
for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
alert( str );*/








//Correct comparisions//

alert( 'Australia'.localeCompare('Zealand') );/*The call str.localeCompare(str2) returns an integer indicating whether str is less, equal or greater than str2 according to the language rules:
Returns a negative number if str is less than str2.
Returns a positive number if str is greater than str2.
Returns 0 if they are equivalent.*/





