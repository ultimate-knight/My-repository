//Intro to default parameters//
function showmessage(from,text='do i know u'){
    alert(from+':'+text);
}
showmessage('ann');

//Alternative default parameters//
function showmessage(text){
    if (text===undefined){
        text='empty string'
    }
alert(text);
}
showmessage();

//Nullish coalescing operator//
function showCount(count){
    alert(count??"unknown");
}
showCount(1);
showcount(null);
showCount();