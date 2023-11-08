//For loop in alphabets//
let fame = {
    name: "John",
    surname: "Smith"
  }
  fame.age = 25; // add one more
  
  // non-integer properties are listed in the creation order
  for (let prop in fame) {
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