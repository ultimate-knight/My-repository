//As the function creation happens in the context of the assignment expression (to the right side of =), this is a Function Expression.//


//function is a value//
function sayhi() {
    alert("please help me");

}

func=sayhi;

func();
sayhi();


//callback functions//
function ask(question, yes, no) {
    if(confirm(question)) yes()
    else no();
}

function showok() {
    alert("you agreed");
}

function showno() {
    alert("u don't agree");
}

ask("Do u have a question.?", showok, showno);


//function expression vs function declaration//
//A Function Expression is created when the execution reaches it and is usable only from that moment.//
//A Function Declaration can be called earlier than it is defined.//

