//Map//
/*
new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
*/



let map=new Map();
map.set(1, "num1");
map.set(90, "hredgegog");//As we can see, unlike objects, keys are not converted to strings. Any type of key is possible.//
alert(map.get(1));
alert(map.get(90));
alert(map.size);



let john={name: "john"};
let visitCountMap=new Map();
visitCountMap.set(john, "maze");
alert(visitCountMap.get(john));




//Iteration over Map//
/*For looping over a map, there are 3 methods:
map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
*/

let recipe=new Map([
    ['cucumber', 50],
    ['onion', 90],
    ['potato', 80],

])
for(let vegetables of recipe.keys()){
    alert(vegetables);
}
for(let amount of recipe.values()){
    alert(amount);
}
for(let kandor of recipe){
    alert(kandor);
}



//Object.entries: Map from Object//

let cabjet={
    name: "hansier",
    age: 45
};

let map23=new Map(Object.entries(cabjet));
alert(map23.get("name"));


//Object.fromEntries: Object from Map//

let prices=Object.fromEntries([
    ['name', 'lionyu'],
    ['age', 98],
])
alert(prices.name);



let caps=new Map;
caps.set('orange', 45);
caps.set('banana', 67);
caps.set('strawberry', 90);
let obj=Object.fromEntries(caps.entries());//There’s Object.fromEntries method that does the reverse: given an array of [key, value] pairs, it creates an object from them://
alert(obj.orange);


//Set//
/*Note: new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.*/

let set= new Set();
let john={name: "john"};
let martha={name: "martha"};
let andrea={name: "andrea"};
set.add(john);
set.add(martha);
set.add(andrea);
alert(set.size);
for(let user of set){
    alert(user.name);
}


//Iteration over Set//
let set34=new Set(["maaz", "naaz", "yousef"])
for(let user of set34){
    alert(user);
}




