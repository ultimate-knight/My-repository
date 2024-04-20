//Doing these for past few weeks for revision//
// let sum=0;
// while(true){
//     let value=prompt('enter a number');
//     if(!value) break;
//     sum=sum+value;
// }
// alert(sum);


// let i=0;
// for(i=0;i<9;i++){
//     if(i%2===0) continue;
//     alert(i);
// }


// outer: for(i=0;i<3;i++){
//     for(j=0;j<3;j++){
//         let value=prompt(`coordinates ${i},${j}`);
//         if(!value) break outer;
        
//     }
// }
// alert('done');



// let a=prompt('enter a number');

// switch(a){
//     case '1':
//         alert('why are u wrong');
//         break;


//     case '3':
//     case '4':
//         alert("do u even know what u're doing");
//         alert('should i remind u again');
//             break;

        
//     case 5:
//         alert('i think u re absolutely right');
//         break;

//     default:
//         alert("i don't know about that");
// }




// function showmessage(){
//     alert("hi i'm good");
// }
// showmessage();
// showmessage();


// function message(){
//     let name='maaz';
//     let address=`i'm ${name}`;
//     alert(address);
// }
// message();




// let username='maaz';
// function showmessage(){
//     username='baqtiyaar';
//     message=`hello my name is ${username}`;
//     alert(message);
// }

// alert(username);

// showmessage();

// alert(username);



// function fancy(name, age){
//     alert(name+ ":" +age);
// }
// fancy('maaz', "22");


// function message(name, name1){
//     alert(`hi, ${name}`);
//     alert(`where have u been, ${name1}`);
// }
// message('maaz');


// function showmessage(from){
//     if(from==undefined){
//         from="it won't show anything";
//         alert(from);
//     }
// }
// showmessage();


// function checkage(age){
//     if(age>=18){
//         return true;
//     }else{
//         return confirm('do u have permission from ur parents')
//     }
// }

// let age=prompt('what is ur age.?');
// if(checkage(age)){
//     alert('Access granted');
// }else{
//     alert('Access denied');
// }



// function message(question, yes, no){
//     if(confirm(question)) yes()
//     else no();
// }

// function showok(){
//     alert('you agreed')
// }

// function showno() {
//     alert("u don't agree");
// }

// message('do u have a question', showok, showno);



// let double=(a,b)=>(a+b);
// alert(double(23,43));

// let name=()=>alert('maaz');
// name();


// let age=prompt('what is ur age.?');
// welcome=(age<18) ?
// ()=>alert('u re welcome'):
// ()=>alert('u re not welcome');

// welcome();


// let result=(a,b)=>{//it can be written as /*result=function(a,b)*/
//     let result=a+b;
//     return result;
// }
// alert(result(90,89));


// let obj={
//     name: 'maaz',
//     age: 22,
// }
// alert(obj.name);
// alert(obj.age);



// let user={};
// user['like birds']='ornithologist';
// alert(user['like birds']);



// let user={
//     name: "john",
//     age: 34,
// }
// key=prompt('what do u wanna know about the user?', "name");
// alert(user[key]);


// let obj={};
// obj['hi there']='hey there';
// key=obj['hi there'];
// alert(key);

// let fruit=prompt('what do u wanna know about the user.?','mango');
// let obj={
//     [fruit]: 5,
// }
// alert(obj.mango);


// //Property value shorthand//
// function makeuser(name, age){
//     return{
//         name: name,
//         age: age,
//     }
// }
// let user=makeuser('maaz', 22)
// alert(user.name);
// alert(user.age);


// //Property names limitations//
// let obj={
//     for: 1,
//     var: 2,
//     let: 3,
// }
// alert(obj.for+obj.var+obj.let);


// let obj1={
//     0: 'name',
//     23: 'age',
// }
// alert(obj1['0']);//when to use square brackets: to assign properties to other variables,to declare properties at runtime,or for digits and other symbols//
// alert(obj1['23']);



// let user={};
// alert(user.nosuchproperty===true);


// let user={name: 'maaz', age: 22}
// alert('name' in user);
// alert('age' in user);
// alert('bla' in user);



// let obj22={age:22, name: "john"};
// key='age';
// button='name';
// alert(key in obj22);
// alert(button in obj22);



// let obj22={
//     name: 'maaz',
//     age: 22,
//     rollno: 160319733025, 
// }
// for(let key in obj22){
//     alert(key);
//     alert(obj22[key]);
// }


// let obj={
//     name: 'maaz',
//     age: '22',
// };
// obj.username='baqtiyaar';//To add properties to objects//
// for(let key in obj){
//     alert(key);
//     alert(obj[key]);
// }





// let obj25={
//     '+23': 'maaz',
//     '+24': 'baqtiyaar',
//     '+25': 'ali',
// }

// for(let key in obj25){
//     alert(+key);
// }


// let num={
//     name: 'maaz',
//     age: '22',
// }
// let admin=num;
// admin.name='john';
// alert(admin.name);
// alert(num.name);


// let obj={
//     name: 'maaz',
//     age: 22,
// }
// let obj22={};
// for(let key in obj){
//     obj22[key]=obj[key];
// }
// obj22.name='baqtiyaar';
// alert(obj22.name);
// alert(obj.name);


// let obj={
//     name: "john",
// }
// let obj1={surname: "pete"};
// let obj2={lastname: 'sandler'};
// Object.assign(obj,obj1,obj2);
// alert(obj.surname);
// alert(obj.lastname);
// alert(obj.name);




// let obj={
//     name: 'john',
// }
// Object.assign(obj, {name: 'pete'});
// alert(obj.name);



// let obj={
//     name: 'maaz',
// }
// user=Object.assign({}, obj);
// alert(user.name);


// let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };
  
//   alert( user.sizes.height ); // 182
//   let clone=Object.assign({}, user);
//   alert(user.sizes===clone.sizes);
//   user.sizes.width="60";
//   alert(clone.sizes.width);
//   alert(user.sizes.width);




// let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };
//   let clone=structuredClone(user);
//   alert(user.sizes===clone.sizes);
//   clone.sizes.width='60';
//   alert(user.sizes.width);


// let user={
//     name: 'maaz',
//     age: '22',
// }
// user.sayhi=function(){
//     alert('my name is maaz');
//     alert(this.name);
// }
// user.sayhi();


// let user={name: 'john'};
// let admin={name: 'stewart'};
// function sayhi(){
//     alert(this.name);
// }
// user.sayhi=sayhi;
// admin.sayhi=sayhi;

// user.sayhi();
// admin.sayhi();

// let user={
//     name: 'koslov',
//     sayhi(){
//        let arrow=() => alert(this.name);
//        arrow();
//     }
// }
// user.sayhi();


// function User(name){
//     this.name=name;
//     this.age=22;
//   }
//   let num=new User('maaz');
//   alert(num.name);
//   alert(num.age);


// function biguser(){
//     this.name='maaz';
//     return {name:"felix"};
// }
// alert(new biguser().name);
  
// function user(name){
//     this.name=name;
//     this.sayhi=function(){
//         alert('hey man');
//     }
// }
// let num=new user('john');
// alert(num.sayhi());



// let id=Symbol('id');
// let id2=Symbol('id');
// alert(id===id2);


// let id = Symbol("id");
// let user = {
//   name: "John",
//   age: 30,
//   [id]: 123
// };
// for (let key in user) alert(key); // name, age (no symbols)
// // the direct access by the symbol works
// alert( "Direct: " + user[id] ); // Direct: 123



// let id = Symbol("id");
// let user = {
//   [id]: 123
// };
// let clone = Object.assign({}, user);
// alert( clone[id] ); // 123



// // read from the global registry
// let id = Symbol.for("id"); // if the symbol did not exist, it is created
// // read it again (maybe from another part of the code)
// let idAgain = Symbol.for("id");
// // the same symbol
// alert( id === idAgain ); // true

// let user={
//     name: 'stewart',
//     age: 40,
//     [Symbol.toPrimitive](hint){
//         alert(`hint: ${hint}`);
//         return hint=="string"? `{name:"${this.name}"}` :this.age;
//     }
// }
// alert(user);
// alert(+user);
// alert(user+200);



// let user = {
//     name: "John",
//     money: 1000,
  
//     // for hint="string"
//     toString() {
//       return `{name: "${this.name}"}`;
//     },
  
//     // for hint="number" or "default"
//     valueOf() {
//       return this.money;
//     }
  
//   };
  
//   alert(user); // toString -> {name: "John"}
//   alert(+user); // valueOf -> 1000
//   alert(user + 500); // valueOf -> 1500


// let str='hello';
// let n=12.23456;
// alert(str.toUpperCase());  
// alert(n.toFixed(1));


// alert(7.9e9);
// alert(7e-7);

// let b=0b111111;
// let c=0o344;
// alert(b);
// alert(c);

// let num=33.4;
// alert(num.toString(2));
// alert(num.toString(16));
// alert(Math.floor(num));
// alert(Math.ceil(num));
// alert(Math.round(num));
// alert(Math.trunc(num));
//Remember these two special numeric values?
// Infinity (and -Infinity) is a special numeric value that is greater (less) than anything.
// NaN represents an error.
// They belong to the type number, but are not “normal” numbers, so there are special functions to check for them:
// isNaN(value) converts its argument to a number and then tests it for being NaN//


// alert(isNaN(NaN));
// alert(isNaN(12));
// alert(isNaN('string'));
// alert(isNaN('12'));
// alert(isNaN('weert'));



// let number=+prompt('enter a number');
// alert(isFinite(number));
// alert(parseInt('123pxer'));
// alert(parseFloat('12.3.4'));
// alert(Math.random());
// alert(Math.max(90,89,78,67));
// alert(Math.min(89,78,65,47));


// function sum(a,b){
//     return a+b;
// }
// alert(`${sum(1,2)}`);



// let guests=`maaz
// baqtiyaar
// ali
// `
// alert(guests);


// let guests="maaz:\n baqtiyaar:\n ali:\n";
// alert(guests);


// let str1='maaz\nbaqtiyaar';
// let str2=`maaz
// baqtiyaar`;
// alert(str1);
// alert(str2);
// alert(str1==str2);
// alert('baqtiyar'.length);

// let str=`compliment`;
// alert(str[0]);
// alert(str[4]);
// alert(str[str.length-1]);
// alert(str.at(-2));

// for(let char of 'mentorship'){
//     alert(char);
// }


// let str='harlem is a keyway';
// // str[0]='m';
// // alert(str[0]);
// // alert('kleptocracy'.toUpperCase());
// // alert('meglomaniac'.toLowerCase());
// // alert('magma'[0].toUpperCase());
// alert(str.indexOf('harlem'));
// alert(str.indexOf('lem'));
// alert(str.indexOf('keyway'));
// alert(str.indexOf('e',2));



