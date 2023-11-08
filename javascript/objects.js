//Programs on objects//
let user={
    name:'john',
    value:70,
}
alert(user.name);
alert(user.value);

//Square bracket notation//
let  user1={};

user1['likes bird']=true;
alert(user1['likes bird']);
delete user1['likes bird']

//one more program similar to square bracket//
let user2={
    name:'maaz',
    number:25,
}
let key=prompt('what do u wanna know about user2?.','name');
alert(user2[key]);

//Computed properties//
let fruit=prompt("what is ur favourite fruit",'apple');
let bag={
    [fruit]:10,
}
alert(bag.apple);

//property value shorthand//
function makeuser(name,age){
    return{
        name:name,
        age:age,
    }
}

let user23=makeuser('maaz',34);
alert(user23.age);

//Property names limitation//
let obj22={
    for:1,
    let:3,
    test:4,
}
alert(obj22.for+obj22.let+obj22.test);

//similar program//
let pen={
    0:'text',
}
alert(pen[0]);
alert(pen['0']);



