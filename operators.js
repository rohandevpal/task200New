//• Do numbers ka addition karo.
let a = 2;
let b = '2';
console.log(a+b);


//• % operator use karke even/odd check karo.
function oddEven(num){
    if(num % 2 === 0){
        console.log(num,'is odd');
        
    }else{
        console.log(num, 'is even');
        
    }
}
oddEven(97);

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
  compareValues(10, 5);


  //• Simple calculator logic likho (add, subtract, multiply).

  function calc(a,b){
    console.log('Addition', a + b);
    console.log('Subtraction', a - b);
    console.log('multiply', a * b);
    
  }

  calc(6,9)