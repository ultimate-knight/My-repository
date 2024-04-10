//More ways to write a number//
let billion=1e9;//It is used to write 100000000 as 1e9//
alert(7.3e9);*/


let mcs=1e-7;//This is used to write 0.0000007 as 1e-7//
alert(1e-7);*/


alert(0xff); //This is hexadecimal//
let a=0b11111111;//This is binary/
let b=0o377;//This is octal//
alert(a==b);*/







//toString(base)//
let num=255;
alert(num.toString(16));//The method num.toString(base) returns a string representation of num in the numeral system with the given base.//
alert(num.toString(2));*/







//Rounding//
let digit=5.6387;
alert(Math.round((digit*100) / 100));*///here we use math.round() which rounds nearest integer like if it is 3.6 it becomes 4 and 3.4 it becomes 3//



let num1=123.490;
alert(num1.toFixed(1));*///The method toFixed(n) rounds the number to n digits after the point and returns a string representation of the result.//



let num = 12.34;
alert( num.toFixed(5) );*///Please note that the result of toFixed is a string. If the decimal part is shorter than required, zeroes are appended to the end://









//Imprecise calculations//

alert(1e500);//If a number is really huge, it may overflow the 64-bit storage and become a special numeric value Infinity://
let sum=0.1+0.2;
alert(sum.toFixed(2));//Please note that toFixed always returns a string. It ensures that it has 2 digits after the decimal point.//
alert(+sum.toFixed(2));*///we can use the unary plus to coerce it into a number://




//Tests: isFinite and isNaN//
alert(isNaN(23));//isNaN(value) converts its argument to a number and then tests it for being NaN://
alert(isNaN("str"));
alert(isNaN(Infinity));//The isNaN function in JavaScript is used to check if a value is NaN (Not-a-Number). It returns true if the provided value is NaN, and false if the value is a valid number or can be converted to one.//
alert(NaN==NaN);//The value NaN is unique in that it does not equal anything, including itself://
alert(isFinite(13));
alert(isFinite(Infinity));//isFinite(value) converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity://
alert(isFinite("str"));*/


let num=+prompt("enter a number");
alert(isFinite(num));//Please note that an empty or a space-only string is treated as 0 in all numeric functions including isFinite.//*/


alert( Number.isNaN(NaN) ); // true
alert( Number.isNaN("str" / 2) ); // true
// Note the difference:
alert( Number.isNaN("str") ); // false, because "str" belongs to the string type, not the number type
alert( isNaN("str") ); // true, because isNaN converts string "str" into a number and gets NaN as a result of this conversion*/



alert( Number.isFinite(123) ); // true
alert( Number.isFinite(Infinity) ); // false
alert( Number.isFinite(2 / 0) ); // false
// Note the difference:
alert( Number.isFinite("123") ); // false, because "123" belongs to the string type, not the number type
alert( isFinite("123") ); // true, because isFinite converts string "123" into a number 123*/





//Parseint and ParseFloat//
alert(parseInt("100px"));//only execute and display number string content will be barred// 
alert(parseFloat("2.3rem"));
alert(parseInt(12.3));//it changes float to num//
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading
alert( parseInt('a123') ); // NaN, the first symbol stops the process
alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, without 0x also works
alert( parseInt('2n9c', 36) ); // 123456*/




//Other math functions//
alert(Math.random());
alert(Math.max(23,67,89,90));
alert(Math.min(23,56,8,90,45,67));
alert(Math.pow(10,8));






