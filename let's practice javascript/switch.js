//switch statement//

/*let a=2+2;

switch(a) {
    case 3:
    alert('Too small');
    break;

    case 5:
        alert('too big');//Note:if break statement is not used then it executes other statements without checking condition//
        break;

    case 4:
        alert('what took u so long');
        break;

        default:
            alert("it ain't ur game");


}*/

//Grouping of cases//
let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}

//Type matters//
let arg=prompt("enter a number");//here we are using string the value will be in string.if we want to use number use +prompt.//

switch(arg) {
    case "1":
        alert("one");
        break;

    case 2:
        alert("two");
        break;

    default:
        alert("do ur thing");
        break;

}