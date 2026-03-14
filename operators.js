//• Do numbers ka addition karo.
let a = 2;
let b = '2';
// console.log(a+b);


//• % operator use karke even/odd check karo.
function oddEven(num){
    if(num % 2 === 0){
        console.log(num,'is odd');
        
    }else{
        console.log(num, 'is even');
        
    }
}
// oddEven(97);

//• >, <, ==, === comparison test karo.

function compareValues(a, b) {

    if (a > b) {
      console.log('a is bigger than b');
    } else {
      console.log('b is bigger than a');
    }
  
    if (a == b) {
      console.log('both have same value');
    } else {
      console.log('both does not have same value');
    }
  
    if (a === b) {
      console.log('both have same value and same data type');
    } else {
      console.log('both does not have same value and not even same data type');
    }
  
  }
  
  // Function call
  // compareValues(10, 5);


  //• Simple calculator logic likho (add, subtract, multiply).

  function calc(a,b){
    console.log('Addition', a + b);
    console.log('Subtraction', a - b);
    console.log('multiply', a * b);
    
  }

  // calc(6,9)


//Comparison Operator – Check whether 10 and 20 are equal using a comparison operator. Expected Output: false

function checkEqualNumbers (a, b){
  if(a == b){
    console.log(true);
    
  }else{
    console.log(false);
    
  }
}

checkEqualNumbers(10, 20);

//Greater Than Comparison – Check if age is greater than 18. Expected Output: true

function checkAge(age){
  if(age > 18){
    console.log(true);
    
  }else{
    console.log(false);
    
  }
}
checkAge(23);

//Logical AND – Check if user is logged in AND user is admin. Expected Output: Access granted: true
function userCheck(isLoggedin, isAdmin){
    return isLoggedin && isAdmin
}
let accessGranted = userCheck(true, true);

console.log("Access Granted:", accessGranted);



//Logical OR – Check if user is admin OR moderator. Expected Output: Access allowed: true

function useCheckAdminModerator(isAdmin, isModerator){
  return isAdmin || isModerator;

}

let accessAdmin = useCheckAdminModerator(false, true);

console.log("Access Allowed:", accessAdmin);

// Multiple Arithmetic Operations – Take three numbers and calculate (a + b) * c. Expected Output: Result: 60
let number1 = 5;
let number2 = 7;
let number3 = 5;

console.log((number1+number2)*number3);

//by using function

function calculateMultiples(a,b,c){
  return (a+b)*c;
}
let result = calculateMultiples(5,7,5);
console.log('result:', result);




//. Comparison + Logical – Check if age > 18 AND salary > 20000. Expected Output: Eligible:true

function checkSalary(age, salary){
  if(age > 18 && salary > 20000){
    console.log('Eligible', true);
    
  }else{
    console.log('Eligible:', false);
    
  }
}

checkSalary(24, 50000);

//Assignment Chain – Store 20 and subtract 5 using -= operator. Expected Output: Finalvalue: 15

function plusMinus(store, subtract){
  store -= subtract;
  return store
}

let resultValue = plusMinus(20, 5) 
console.log(resultValue);

//Multiple Conditions – Check if a number is greater than 10 and less than 50. Expected Output: true
function greterAndLess(a,b){
  if(a > 10 && a <50){
    console.log(true);
    
  }else{
    console.log(false);
    
  }
}
greterAndLess(23)