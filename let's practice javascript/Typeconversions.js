//string conversion//
let value=true;
alert(value);

value=Boolean(value);
alert(typeof value);

//numeric conversions//
/*alert(6/2);
alert("6" / "2");*/

let str="23";
alert(typeof(str));

let num=Number(str);
alert(typeof(num));//it gives number why because str contains number but it is also in string.It removes inverted commas//

let age=Number("it's a number");
alert(age);

alert(Number("123"));
alert(Number("123z"));
alert(Number(true));
alert(Number(false));

//boolean conversions//
alert(Boolean(1));
alert(Boolean(0));
alert(Boolean(true));
alert(Boolean(""));
alert(Boolean(" "));
alert(Boolean("0"));