//Symbol.toprimitive//
let user={
    name: 'john',
    money: 500,
    [Symbol.toPrimitive](hint) {
        return hint=="string" ? `{name: "${this.name}"}` : this.money;
    }
};
alert(user);
alert(+user);
alert(user+500); */



//to string/value(of)//
let user={name:"john"};
alert(user);
alert(user.valueOf()==user);*/



let user = {
    name: "John",
    money: 1000,
    // for hint="string"
    toString() {
      return `{name: "${this.name}"}`;
    },
    // for hint="number" or "default"
    valueOf() {
      return this.money;
    }
  };
  alert(user); // toString -> {name: "John"}
  alert(+user); // valueOf -> 1000
  alert(user + 500); // valueOf -> 1500*/




  let admin={
    name: "john",

    toString() {
        return this.name;
    }
  }
  alert(admin);
  alert(admin+80);*/





//Further conversions//
let obj={
    toString() {
        return "2";
    }
}
alert(obj*2);*/






let obj = {
    toString() {
        return "5";
    }
};
alert(obj+2);





  