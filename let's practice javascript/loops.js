//while loop//
/*let i=0;
while (i<3) {
    alert(i);
    i++;
} */

/*let j=4;

while(j) {
    alert(j);//when j becomes 0 it becomes falsy so execution stops//
    j--;
}*/



//The do-while loop//
/*let i=0;
do {
    alert(i);//The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.//
    i++
}
while(i<5);*/




//The for-loop//
/*for(i=1; i<6; i++) {
    alert(i);
}


let i=0;
for(i=0; i<3; i++) {
    alert(i);
}
alert(i);*/


//break//
/*let sum=0;

while(true) {
    let value=+prompt("write any number.?");

    if(!value) break;
    sum+=value;

}
alert(sum);*/



//continue//
/*let i=0;

for(i=0; i<9; i++) {
    if(i%2===0) continue;//continue loop skips the current iteration and moves for the next iteration//
    alert(i);


}*/


//labels//
outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Value at coords (${i},${j})`, '');
  
      // if an empty string or canceled, then break out of both loops
      if (!input) break outer; // (*)
  
      // do something with the value...
    }
  }
  
  alert('Done!');




