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


// if-else – Take a number and check whether it is positive or negative. Expected Output: Number is positive
let positive = -3;

if(positive > 0){
    console.log('Number is positive');
}else if(positive < 0){
    console.log('number is negative');
}

//Pass / Fail – If marks are greater than 40 print pass otherwise fail. Expected Output: StudentPassed
function checkResult(marks){
    if(marks > 40  ){
        console.log('Student pass');
    }else{
        console.log('Student fail');
    }
}

checkResult(76)

//Temperature Check – If temperature is greater than 30 print 'Hot weather'. Expected Output: Hot weather
function checkWeather(temp){
    if(temp > 30){
        console.log('Hot weather');
    }else{
        console.log('Cold Weather');
        
    }
}

checkWeather(45)

//else if Example – Print grade based on marks (90+ A, 70+ B, 50+ C, else Fail). Expected Output: Grade: B
function checkGrade(marks){
    if(marks >= 90){
        console.log("A");

    }else if(marks >=70){
        console.log("B");

    }else if(marks >=50){
        console.log('C');

    }else{
        console.log("fail");
        
    }
}
checkGrade(45);

//Age Category – Print category based on age (<13 Child, 13–19 Teenager, 20+ Adult).Expected Output: Category: Adult

function checkAgeCategry (age){
    if(age < 13){
        console.log('Child');
        
    }else if(age >=13 && age <=19){
        console.log('Teenager');
        
    }else{
        console.log('Adult');
        
    }
}

checkAgeCategry(5)

//Largest Number – Compare two numbers and print the larger one. Expected Output: Largest number: 25

function comparelargestNumber(a,b){
    if(a > b){

        console.log('Largest Number is:', a);
        
    }else{
        console.log('largest Number is :', b);
        
    }
}
comparelargestNumber(23,99);

//Login Check – If user is logged in print welcome message otherwise login message. Expected Output: Welcome User

function isUserLoggedIn(isloggedin, username){
   if(isloggedin){
        console.log('Welcome', username);
    
   }else{
    console.log('User not found');
    
   }
    
}

isUserLoggedIn(true, 'rohan')


//switch Statement – Take number (1–7) and print week day using switch. Expected Output: Monday

function getWeekDay(dayNumber) {
    switch(dayNumber) {
      case 1:
        console.log("Monday");
        break;
      case 2:
        console.log("Tuesday");
        break;
      case 3:
        console.log("Wednesday");
        break;
      case 4:
        console.log("Thursday");
        break;
      case 5:
        console.log("Friday");
        break;
      case 6:
        console.log("Saturday");
        break;
      case 7:
        console.log("Sunday");
        break;
      default:
        console.log("Invalid day");
    }
  }
  
  getWeekDay(1);

// Multiple Conditions – If age is 18+ and user has license then driving allowed. Expected Output: Driving allowed
function drivingAllowed(age, haslicance){

    if(age >= 18 && haslicance == true){
        console.log('Driving Allowed');   
    }else{
        console.log('Driving not allowed');
        
    }
}

drivingAllowed(15, false);

//Discount System – Based on purchase amount show discount (5000+ 20%, 2000+ 10%, else none). Expected Output: Discount: 10%

function showDiscount(purchaseAmount){
    if(purchaseAmount > 5000){
        console.log('Discount: 20%');
        
    }else if(purchaseAmount > 2000){
        console.log('Discount: 10%');
        
    }else{
        console.log('You are not eligible for the discount');
        
    }
}

showDiscount(500);

//switch Calculator – Take two numbers and an operator (+ - * /) and calculate result using switch. Expected Output: Result: 15
function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;

        case '-':
            result = num1 - num2;
            break;

        case '*':
            result = num1 * num2;
            break;

        case '/':
            result = num1 / num2;
            break;

        default:
            return "Invalid operator";
    }

    return result;
}

let answer = calculator(10, 5, '+');
console.log("Result:", answer);



//Number Range Check – Check if number is between 10 and 50. Expected Output: Number is in range

function checkNumberbetween(number){
    if(number >=10 && number <=50){
        console.log('Number is in range');
        
    }else{
        console.log('Number is not range ');
        
    }
}

checkNumberbetween(22);

//Username & Password Check – If username and password are correct print login successful. Expected Output: Login successful

function login(username, password) {
    let correctUsername = "admin";
    let correctPassword = "1234";

    if (username === correctUsername && password === correctPassword) {
        console.log("Login successful");
    } else {
        console.log("Invalid username or password");
    }
}

login("admin", "1234");