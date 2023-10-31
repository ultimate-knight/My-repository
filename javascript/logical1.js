if(1||0){
    alert('truthy');
}

let hour=12;
let bite=true;

if(hour<10||hour>18||bite) {
    alert('The office was closed');
}

alert(1||0);
alert(null||1);
alert(null||0||1);
alert(undefined||null||0);

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

true || alert("not printed");
false || alert("printed");