//Browser environment, specs//
/*function sayhi(){
    alert("how are u doing");
}
window.sayhi();


alert(window.innerHeight);
*/

//Document Object Model//

/*document.body.style.background = "red";
// change it back after 1 second
setTimeout(() => document.body.style.background = "", 1000);*/



//Browser Object Model//
alert(location.href);
if(confirm("go to wikipedia")){
    location.href="https://wikipedia.org";//
}
/*Note: The functions alert/confirm/prompt are also a part of the BOM: they are not directly related to the document, but represent pure browser methods for communicating with the user.*/