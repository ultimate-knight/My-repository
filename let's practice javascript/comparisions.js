//Boolean is the result//
alert(2>1);
alert(1==0);
alert(3!=1);


let result=5<5;//assign the result of the comparision//
alert(result);

//string comparision//
alert("baqtiyaar" > "maaz");  //here we are comparing two strings letter by letter if any letter has higher alphabetical number it becomes greater(z>a)// 

alert("Apple" > "Orange");

//comparision of different types//
alert('2' > 1);
alert('01' > 1);//string becomes a number when comparing//

alert(true==1);//for boolean values true becomes 1 and false becomes 0//
alert(false==0)

let a = 0;
alert( Boolean(a) ); // false
                                 
let b = "0";
alert( Boolean(b) ); // true
                              //here string is evaluated that's why in boolean(b) it is true//
alert(a == b); // true!


//Strict equality//
alert(0==false);
alert(""==false);

alert(0===false);//it checks strict equality without type conversion//

//Comparisions with null and undefined//
alert(null === undefined);

alert(null==undefined);//for a non strict check//

alert(null>0);
alert(null>=0);//null in equality check(==) is converted to undefined.Whereas in comparision(>,<) null is converted to zero//
alert(null==0);

//Incomparable undefined//
alert(undefined>0);
alert(undefined<0);//here 1 and 2 is false because it undefined became nan and it is special numeric value,.whereas in third one it becomes null.//
alert(undefined==0);

