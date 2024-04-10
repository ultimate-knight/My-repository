//||(OR) operator//
/*alert(true||true);
alert(true||false);
alert(false||true);
alert(false||false);

if(1||0) {
    alert("kutty");//Here we see whether the condition is true,if it's true then the code block will execute.//

}

let hour=10;

if(hour==10 || hour<10) {
    alert("u re late");
}

let hour1=12;
let isweekend=true;

if(hour1>12 || hour1<12 || isweekend) {
    alert("u are on time");

}*/


let firstname="";
let lastname="";
let nickname="maaz";
alert(firstname || lastname || nickname || Anonymous);

true || alert("not printed");//here the || operator checks the condition between two truth values,if first condition is seen as true on the beginning it will call-off the execution//
false || alert("printed");













//AND(&&) Operator//
alert(true && true);
alert(true && false);
alert(false && true);
alert(false && false);



let hour=30;
let minute=25;
if(hour==30 && minute==25 ) {
    alert("it's time to go");//both are truthy so it gets executed//
}



if(1&&0) {
    alert("let's write");//it won't work because the result is falsy//
}




alert(1&&0);//if the first operand is truthy,AND operator returns the second operand//
alert(1&&5);
alert(0&&4);//here if the first operand is false AND operator returns the first one and ignores the second one//
alert(undefined&&5);


alert(1&&2&&3&&4);//Here AND operator evaluates the whole expression,after evaluating it sees the whole expression is truthy,that's why it returns last value//
alert(1&&null&&3&&4);//it returns null as u know it is obvious//


//Note:AND(&&) operator has higher precedence than OR|| operator//



//!(NOT) operator//

alert(!true);
alert(!1);//NOT operator is denoted with !//



alert(!!"23");//it is same as boolean("123")==!!"123".They both return the same value.It is called as double NOT operator//
alert(!!"");



//let's do some tasks//
let user=prompt("who is there.?");

if(user==="Admin") {

   let pass= prompt("password?") ; 

    if(pass==="TheMaster") {
        alert("welcome");

    }else if(pass==="" || pass===null) {
        alert("cancelled");
    }else {
        alert("wrong password");
    }
}

else if(user==="" || user===null) {
    alert("cancelled")
}

else {
    alert("i don't know u");
}
