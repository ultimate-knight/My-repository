//Creation//
let now=new Date();
alert(now);*/


let Jan01_1970=new Date(0);
alert(Jan01_1970);
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert(Jan02_1970);*/


let date = new Date("2001-07-26");
alert(date);*/


let date = new Date(2011, 0, 1, 2, 3, 4, 567);
alert( date ); // 1.01.2011, 02:03:04.567*/


//Access date components//

let date=new Date();
alert(date.getHours());
alert(date.getUTCHours());
alert( new Date().getTimezoneOffset() );*/


//Setting date components//

let today = new Date();
today.setHours(0);
alert(today); // still today, but the hour is changed to 0
today.setHours(0, 0, 0, 0);
alert(today); // still today, now 00:00:00 sharp.*/

//Autocorrection//
let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
alert(date); // ...is 1st Feb 2013!*/


let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);
alert( date ); // 1 Mar 2016*/


let date = new Date();
date.setSeconds(date.getSeconds() + 70);
alert( date ); // shows the correct date*/


let date = new Date(2016, 0, 2); // 2 Jan 2016
date.setDate(4); // set day 1 of month
alert( date );
date.setDate(0); // min day is 1, so the last day of the previous month is assumed
alert( date ); // 31 Dec 2015*/


//Date to number, date diff//
let date = new Date();
alert(+date); // the number of milliseconds, same as date.getTime()


let start = new Date(); // start measuring time
// do the job
for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
  }
let end = new Date(); // end measuring time
alert( `The loop took ${end - start} ms` );*/



//Date.now()//
let start = Date.now(); // milliseconds count from 1 Jan 1970s
// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
let end = Date.now(); // done
alert( `The loop took ${end - start} ms` ); // subtract numbers, not dates


//Benchmarking//

function diffSubtract(date1, date2) {
    return date2 - date1;
  }
  
  function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
  }
  
  function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();
  
    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
  }
  
  let time1 = 0;
  let time2 = 0;
  
  // run bench(diffSubtract) and bench(diffGetTime) each 10 times alternating
  for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
  }
  
  alert( 'Total time for diffSubtract: ' + time1 );
  alert( 'Total time for diffGetTime: ' + time2 );
