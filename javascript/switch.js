let a=2+2;

switch(a){
    case 3:
        alert('are u sure');
        break;
    case 4:
        alert("exactly");
        break;
    case 5:
        alert('u re mad');
        break;
    default:
        alert("i don't know any such values");

}

/Another program/
let b='1';
let c=0;
switch(+b){
    case c+1:
        alert("This runs");
        break;
    
    default:
        alert("i don't know man");
}

/Grouping of cases/
let d=7;
switch(d){
    case 6:
        alert('what u re upto');
        break;
    case 7:
    case 8:
        alert("Take a math class");
        alert("Go somewhere else");
        break;
    
    default:
        alert("Anything can be possible");

}

/Type matters/
let arg=prompt('Enter a value')
switch(arg){
    case '1':
    case '0':
        alert('zero or 1');
        break;

    case '2':
        alert('Two');
        break;
    
    case 3:
        alert("It won't execute");
        break;
    
    default:
        alert('execute me');


}