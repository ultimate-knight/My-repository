//structured clone program//
let user={
    name:'maaz',
    sizes:{
        height:200,
        weight:66,
    }
}

let clone=structuredClone(user);

alert(user.sizes===clone.sizes);

user.sizes.height=100;
alert(clone.sizes.height);

//Circular reference//
let user1 = {};
user1.me = user1;

let clone1 = structuredClone(user1);
alert(clone1.me === clone1); 