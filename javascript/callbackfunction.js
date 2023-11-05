//Callback functions//
function ask(question,yes,no){
    if(confirm(question)) yes();
    else no();
}

function showok(){
    alert('you agreed');
}

function showcancel(){
    alert("you didn't agreed");
}

ask('are u a liar?',showok,showcancel);