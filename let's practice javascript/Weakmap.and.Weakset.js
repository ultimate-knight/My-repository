//Weakset//
let visitedset=new WeakSet();
let john={name: "john"};
let mand={name: "mand"};
let gant={name: "gant"};
visitedset.add(john);
visitedset.add(mand);
visitedset.add(gant);
alert(visitedset.has(john));
alert(visitedset.has(gant));
