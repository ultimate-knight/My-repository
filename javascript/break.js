let sum=0;
 while(true){
    let value=prompt("enter a number",'');
    if(!value) break;
    sum+=value;
}
alert("sum"+sum);

for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
  
    alert(i); // 1, then 3, 5, 7, 9
  }

  
  outer: for (let k = 0; k < 3; k++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Value at coords (${k},${j})`, '');
  
      // if an empty string or canceled, then break out of both loops
      if (!input) break outer; // (*)
  
      // do something with the value...
    }
  }
  
  alert('Done!');