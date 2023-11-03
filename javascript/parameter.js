function showmessage(from,text){
    alert(from+':'+text)

}
showmessage('ann','hello');
showmessage('ann','how are u');

//Similar problem//
function showmessage(from,text){
    from=('*'+from+'*');
    alert(from+':'+'text');
}
from="ann";
showmessage(from,'hello');
alert(from);
