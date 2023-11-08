//property existent text in operator//
let user={};
alert(user.place=undefined);

//in operator//
let obj={name:'maaz',number:25}
alert('number' in obj);
alert('name' in obj);

//Other similar problem//
let id={age:30};
let key="age";
alert(key in id);

//For loop//
let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
  };
  
  for (let hode in codes) {
    alert(hode);
  }

  //math truncate//
Math.trunc(Number("49"), 
Math.trunc(Number("+49"), 
Math.trunc(Number("1.2"),

//For loop in alphabets//
let fame = {
    name: "John",
    surname: "Smith"
  }
  fame.age = 25; // add one more
  
  // non-integer properties are listed in the creation order
  for (let prop in num) {
    alert( prop ); // name, surname, age
  }

  //Magic of + operator//
  let nodes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
  };
  
  for (let code in nodes) {
    alert( +code ); // 49, 41, 44, 1
  }