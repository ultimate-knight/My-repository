//unary binary operand//
/*let x=1;
x=-x;
alert(x);

let y=3, z=8;
alert(y*z);

alert(5%2);//remainder//
alert(8%3);

alert(3**3);//exponentiation//
alert(2**4);
alert(2**(1/2));//square root//
alert(6**(1/3));//cube root//*/

//string concatenation with binary//
/*let s="my"+"maaz";
alert(s);

alert("1"+2);//Note that if any of the operands is a string, then the other one is converted to a string too.//
alert(2+"3");             //See, it doesn’t matter whether the first operand is a string or the second one.//
alert(2+3+"5");//here the result is 5+5 which is equal to 55,because of the sequence//
alert("3"+2+3);//which is equal to 323 because if the precedence starts from string then it concatenates the whole expression//*/

//It occurs only in binary + operator but not in others//
/*alert("6"-"2");
alert("5" / "2");*/

//Numeric conversion unary +//
/*let g=2;
alert(g);
alert(+g);  //+ unary operator basically convert strings into numbers or any other thing//

let y=-2;
alert(+y);*/

/*alert(+true);
alert(+"");*/

/*let apples="2", oranges="3";
alert(apples + oranges);  //here basically two strings are concatenated but if we want them to become numbers and have addition then put +operator before them//
alert(+apples + +oranges);*/

//Assignment //
/*let x=2*2+1;
alert(x);*/


//Assignment=return a value//
/*let a=1, b=2;
let c=b-(a=b-1);
alert(c);
alert(a);*/

//Modify in place//
/*let n=2;
n+=3;//which is same as n=n+3//
n*=5;//which is same as n=n*5//
alert(n);*/

/*let counter=3;
counter++;  //same as +1//
alert(counter);*/

/*let counter1=5;
counter1--; //same as -1//
alert(counter1);*/

let counter=12;//postfix and prefix//
++counter;
counter++;
a=counter++;
alert(a);

//comma//
/*a=(2+3, 4+5); //here it always returns the second argument i.e.4+5 dumping the first one//
alert(a);*/



