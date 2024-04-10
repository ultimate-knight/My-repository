//Object.keys, values, entries//
/*Object.keys(obj) – returns an array of keys.
Object.values(obj) – returns an array of values.
Object.entries(obj) – returns an array of [key, value] pairs.*/

let user1={
    name: "john",
    age: 76
};
for(let value of Object.values(user1)){
    alert(value);
}

//Transforming objects//
let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };
  let doublePrices = Object.fromEntries(
    // convert prices to array, map each key/value pair into another pair
    // and then fromEntries gives back the object
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
  );
  
  alert(doublePrices.meat); // 8