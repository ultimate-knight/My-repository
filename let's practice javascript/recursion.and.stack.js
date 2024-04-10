//Two ways of thinking//
function pow(x, n){
    let result=1;
    for(let i=0; i<n; i++){
        result*=x;
    }
    return result;
}
alert(pow(2, 3));*/


function pow(x, n){
    if(n==1){
        return x;
    }else{
        return x*pow(x, n-1);
    }
}
alert(pow(2, 4));



let company = { // the same object, compressed for brevity
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };
  // The function to do the job
  function sumSalaries(department) {
    if (Array.isArray(department)) { // case (1)
      return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
    } else { // case (2)
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
      }
      return sum;
    }
  }
  alert(sumSalaries(company)); // 7700