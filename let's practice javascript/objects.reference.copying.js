//objects references and copying//

let user={
    name: "john",
    age: 34,
}*/

let admin=user;
admin.name="pete";
alert(admin.name);*/


//comparision by reference//

let a={};
let b=a;
alert(a==b);
alert(a===b);*/

let a={};
let b={};
alert(a==b);
alert(a===b);*/


//Cloning and merging, object.assign//

let user={
    name: "john",
    age: 30,
}
let admin={};
for(let key in user) {
    admin[key]=user[key];
}
admin.name="pete";
alert(user.name);*/

let user={name: "john"};
let object1={canview: true};
let object2={age: 34};
Object.assign(user,object1,object2);//here we use obj.assign(target-object,source-obj,source-obj) in which source object is copied into target ones//
alert(user.name);
alert(object1.canview);
alert(object2.age);*/


let admin={name: "pete"};
let col=Object.assign({},admin);//here we create new object in col variable and assign admin properties to it//
alert(col.name);*/


//Nested cloning//
let user={
    name: 'john',
    sizes: {
        height: '182cm',
        width: '50cm',
    }
};
alert(user.sizes.height);*/


let user1={
    name: "john",
    sizes: {
        width: 60,
        height: 170,
    }
}
let clone=Object.assign({}, user1);
alert(clone.sizes==user1.sizes);
user1.sizes.width=90;
alert(clone.sizes.width);*/



let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };            //structured clones//
  
  let clone = structuredClone(user);
  
  alert( user.sizes === clone.sizes ); // false, different objects
  
  // user and clone are totally unrelated now//
  user.sizes.width = 60;    // change a property from one place
  alert(clone.sizes.width); // 50, not related


  let user={};
  user.me=user;
  let clone=structuredClone(user);//circular reference//
  alert(clone.me===clone);









