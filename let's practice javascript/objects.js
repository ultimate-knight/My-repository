//objects//
/*let user={
    name: "john",
    age:"45",
    phone: "+719903034",
}

user.isadmin=true;
alert(user.isadmin);
alert(user.name);
alert(user.age);
alert(user.phone);
delete user.age;*/

//square brackets//
/*let user={};
user["like birds"]=true;
alert(user["like birds"]);*/

/*let user={
    name: "john",
    age: 45,
}

let key=prompt("what do u wanna know about user?", "name");
alert(user[key]);*/


//computed properties//
/*let fruit=prompt("which fruit u wanna buy");

let property={
    [fruit]: 5,
};

alert(property.apple);*/



//property value shorthand//
/*function makeuser(name, age) {
    return {
        name: name,
        age: age,
    }
}
 let user=makeuser("john", 50);
 alert(user.name);*/


 //property names limitation//
 /*let obj={
    for: 1,
    let: 2,
    return:3,
 };
 alert(obj.for+obj.let+obj.return);*/


 /*let obj={
    0: "test",
 };

 alert(obj[0]);*/

/*let obj = {};
obj.__proto__ = 5; // assign a number
alert(obj.__proto__); // [object Object] - the value is an object*/


//property existence test in operator//

/*let user={};
alert(user.no==undefined);*/



/*let user={
    name: "john",
    age: "30",
}
alert("john" in user);
alert("95" in user);*/



/*let user={
    age: 34,
}
key="age";
alert(key in user);*/


/*let obj = {
    test: undefined
  };
alert( obj.test ); // it's undefined, so - no such property?
alert( "test" in obj ); // true, the property does exist!*/



//The for in loop//
/*let user={
    name: "john",
    age: 34,
}
for(let key in user) {
    alert(key);
    alert(user[key]);
}*/


let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
  };
  
  for (let key in codes) {
    alert(key); // 1, 41, 44, 49
  }
  
  