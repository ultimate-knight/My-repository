let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name);

//Comparision by reference//
let a={};

b=a;

alert(a==b);
alert(a===b);

//Two objects aren't equal//
let c = {};
let d = {}; // two independent objects

alert( c == d )

