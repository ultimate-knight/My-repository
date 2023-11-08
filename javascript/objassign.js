
//object assign//
let obj={name:'johnny'};
let permission1={canView:true};
let permission2={canEdit:true};
Object.assign(obj,permission1,permission2);

alert(obj.name);
alert(obj.canView);
alert(obj.canEdit);

//if the copied property already exists it gets overwritten//
let user = { name: "John" };

Object.assign(user, { name: "Pete" });

alert(user.name);

//Simple object cloning//
let user1 = {
    name: "John",
    age: 30
  };
  
  let clone = Object.assign({}, user1);
  
  alert(clone.name); 
  alert(clone.age); 