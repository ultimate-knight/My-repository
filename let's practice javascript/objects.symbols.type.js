//Symbols//

let id1=Symbol("id");
let id2=Symbol("id");//Symbols are guaranteed to be unique. Even if we create many symbols with exactly the same description, they are different values.//
alert(id1==id2);*/

let id=Symbol("id");
alert(id);*/


let id = Symbol("id");
alert(id.toString());*/


let id = Symbol("id");
alert(id.toString());*/



//hidden properties//
let user={
    name: "john",
    age: 34,
}
let id=Symbol("id");
user[id]=1;
alert(user[id]);*/




//Symbols are skipped by for…in//

let id = Symbol("id");
let user = {
  [id]: 123
};

let clone = Object.assign({}, user);
alert( clone[id] ); // 123*/


//Global symbols//
// read from the global registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created
// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");
// the same symbol
alert( id === idAgain ); // true*/


// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");
// get name by symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id*/


let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");
alert( Symbol.keyFor(globalSymbol) ); // name, global symbol
alert( Symbol.keyFor(localSymbol) ); // undefined, not global
alert( localSymbol.description ); // name
