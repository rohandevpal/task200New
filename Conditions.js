//• Age check karo (18+ voting allowed).
function ageCheck(age){
    if(age > 18){
        console.log('You are eligible to vote');
        
    }else{
        console.log('You are not eligible to vote');
        
    }
}

console.log(ageCheck(27));


//• Number positive ya negative check karo.

function checkPositivenegitive (num){
    if(num > 0){
        console.log(num, 'is positive ');
        
    }else{
        console.log(num, ' is negitive');
        
    }
}

checkPositivenegitive(-10)


function oddEven (num){
    if(num % 2 == 0){
        console.log(num, 'is odd');
        
    }else{
        console.log(num, 'is even');
        
    }
}

oddEven(8)

//• Grade system banao (A,B,C).

function checkGrades(marks){
    if(marks >= 90){
        console.log('A');
        
    }else if(marks >= 80){
        console.log('B');
        
    }else if(marks >= 60){
        console.log('C');
        
    }else if(marks >= 45){
        console.log('D');
        
    }else{
        console.log('Fail');
        
    }
}

checkGrades(92);


//• 3 numbers me se largest find karo.

function findLargest(a, b, c) {

    if (a > b && a > c) {
      console.log("Largest number is:", a);
    } else if (b > a && b > c) {
      console.log("Largest number is:", b);
    } else {
      console.log("Largest number is:", c);
    }
  
  }
  
  findLargest(78, 25, 15);