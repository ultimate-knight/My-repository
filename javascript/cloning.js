
let user={
    name:'maaz',
    age:22,
}
let clone={};
for(let key in user){
    clone[key]=user[key]
}
clone.name='baqtiyaar';
alert(user.name);
