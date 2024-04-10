//setTimeout//
/*function sayhi(){
    alert("hi how are u doing.?");
}
setTimeout(sayhi,3000);*/



function saybye(phrase, hello){
    alert(phrase+','+hello);

}
setTimeout(saybye,3000,"hi","how are u");



setTimeout("alert('hello')", 1000);
setTimeout(()=>alert('hello'), 1000);


//setinterval//

let timer=setInterval(()=>alert("tick"), 2000);
setTimeout(() => { clearInterval(timerId);alert("stop");},5000);


//Zero delay setTimeout//

setTimeout(() => alert("World"));
alert("Hello");
//This schedules the execution of func as soon as possible. But the scheduler will invoke it only after the currently executing script is complete.//