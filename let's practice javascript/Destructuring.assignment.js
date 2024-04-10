//Array Destructuring//

let arr=['john', 'smith'];
let [firstname, lastname]=arr;//Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.Destructuring also works well with complex functions that have a lot of parameters, default values, and so on. Soon we’ll see that.//
alert(firstname);
alert(lastname);


let [country1,,country2]=["tanzania", "south-africa", 'congo', 'ghana'];
alert(country2);//In the code above, the second element of the array is skipped, the third one is assigned to title, and the rest of the array items are also skipped (as there are no variables for them).//



let user={};
[user.name, user.secondname]="john smith".split(' ');
alert(user.name);
alert(user.secondname);




let user1={
    name: "johnny",
    age: 30,
}
for(let [key,value] of Object.entries(user1)) {
    alert(`${key}:${value}`);
}


let guest="jane";
let guest1="haes";
[guest, guest1]=[guest1, guest];//Here we create a temporary array of two variables and immediately destructure it in swapped order.We can swap more than two variables this way.//
alert(`${guest} ${guest1}`);



//rest//

let [name1, name2]=["julius", "pecker", "langston", "michael"];
alert(name1);
alert(name2);



let [name1, name2, ...rest]=["john", "mariam", "concurt", "condolize", "crentel"];
alert(rest[0]);
alert(rest[1]);//If we’d like also to gather all that follows – we can add one more parameter that gets “the rest” using three dots "..."://
alert(rest[2]);//The value of rest is the array of the remaining array elements.//
alert(rest.length);


//Deafult values//

let [firstname, lastname]=[];
alert(firstname);//If the array is shorter than the list of variables on the left, there will be no errors. Absent values are considered undefined://
alert(lastname);




let[name=prompt("first name?"), surname=prompt("second name.?")]=["julius"];
alert(name);
alert(surname);




let [firstname = "Guest", secondname = "Anonymous"] = ["Julius"];
alert(firstname);    // Julius (from array)
alert(secondname); // Anonymous (default used)





//Object destructuring//

let options={
    name: "maaz",
    age: 34,
    nickname: "baqtiyaar",//let {var1, var2} = {var1:…, var2:…}//
    country: "india",
    state: "Telangana",
}
let{name, age, nickname, country:con, state: Tel}=options;//If we want to assign a property to a variable with another name, for instance, make options.width go into the variable named w, then we can set the variable name using a colon://
alert(age);
alert(nickname);
alert(name);
alert(con);
alert(Tel);



let choices={
    title: "object",
}
let{height: h=100, width: w=200, title}=choices;
alert(w);
alert(h);
alert(title);




let options = {
    title: "Menu",
    width: 100,
    height: 200//If we have a complex object with many properties, we can extract only what we need://
  };
  // only extract title as a variable
  let { title } = options;
  alert(title); // Menu


  //The rest pattern...//
  let options12={
    name: "maaz",
    age: 22,
    nationality: "hyderabad",
  }
  let{name, ...rest}=options12;
  alert(rest.nationality);
  alert(rest.age);




let title, width, height;

// okay now
({title, width, height} = {title: "Menu", width: 200, height: 100});

alert( title ); // Menu


//Nested destructuring
let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  
  // destructuring assignment split in multiple lines for clarity
  let {
    size: { // put size here
      width,
      height
    },
    items: [item1, item2], // assign items here
    title = "Menu" // not present in the object (default value is used)
  } = options;
  
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200
  alert(item1);  // Cake
  alert(item2);  // Donut



  //Smart function parameters//

  let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };
  
  function showMenu({
    title = "Untitled",
    width: w = 100,  // width goes to w
    height: h = 200, // height goes to h
    items: [item1, item2] // items first element goes to item1, second to item2
  }) {
    alert( `${title} ${w} ${h}` ); // My Menu 100 200
    alert( item1 ); // Item1
    alert( item2 ); // Item2
  }
  showMenu(options);




  function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
    alert( `${title} ${width} ${height}` );
  }
  showMenu(); // Menu 100 200


  