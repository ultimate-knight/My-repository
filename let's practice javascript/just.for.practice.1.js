function showimg(question, yes, no){
    if(confirm(question)) yes()
    else no();
}
function showok(){
    alert("acess granted");
} 
function showno(){
    alert("access denied");
}
    

showimg("i need access to credentials.?", showok, showno);