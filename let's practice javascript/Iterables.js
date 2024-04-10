//Symbol iterator//

let range={
    from: 1,
    to: 5,


    [Symbol.iterator]() {
        this.current=this.from;
        return this;
    },

    next() {
        if(this.current<=this.to) {
            return{done: false, value: this.current++};
        }else {
            return{done: true};

        }
    }
};
for(let num of range) {
    alert(num);
}





//String is iterable//

for(let char of "maaz") {
    alert(char);
}


let str="x";
for(let char of str) {
    alert(str);
}





//Array.from//
let arraylike={
    name: "maaz",
    rollno: 25,
    length: 2,
}
let arr=Array.from(arraylike);
    alert(arr.pop());
     




let str="x😂";
let char=Array.from(str);
alert(str[0]);
alert(str[1]);
alert(str[2]);
alert(str.length);


let str1 = '𝒳😂';
let chars = []; // Array.from internally does the same loop
for (let char of str1) {
  chars.push(char);
}
alert(chars);



function slice(str, start, end) {
    return Array.from(str).slice(start, end).join('');
  }
  let str = '𝒳😂𩷶';
  alert( slice(str, 1, 3) ); // 😂𩷶
  // the native method does not support surrogate pairs
  alert( str.slice(1, 3) ); // garbage (two pieces from different surrogate pairs)