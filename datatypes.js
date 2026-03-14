//• String, number aur boolean variables create karo.
let string = "rohan";
let number = 2;
let bool = true;


//typeof operator use karke type print karo.

console.log(typeof(string));

console.log(typeof(number));

console.log(typeof(bool));


//• Ek array aur ek object create karo.
let arr = ["rohan", "pal", 34];
let obj = {
    name: "rohan",
    age: 28,
    edu: "BCA"
}

console.log(arr,obj);


//• null aur undefined ka example banao.
let a  = null;
let b;

console.log(a);
console.log(b);


//• '5' + 2 ka output check karo.

console.log("5"+2);

// String Length – Store a sentence in a variable and print the total number of characters.
//Expected Output: Total characters: 18

let sentance = "My name is barkha";
// console.log('Total Charactors:', sentance.length);

//Number Addition – Create two number variables and print their sum

function printSum (a, b){
    console.log(a + b);
}
printSum(23, 5);


//8. Boolean Condition – Store age in a variable and check if the user is an adult (18+). Expected


function checkAge (age) {
    if(age > 18){
        console.log('You are Eligible to Vote', true);
        
    }else{
        console.log('You are not Eligible to Vote', false);
    }
}
checkAge(32);

// Array Length – Create an array with 5 colors and print the total number of colors. Expected

let colors = ['red', 'blue', 'green', 'yellow', 'pink'];

    console.log('total Number of colors is: ',colors.length)


// Object Properties – Create a car object with brand, model, year and print the brand.
//Expected Output: Car brand: Toyota

let car = {
    brand:'maruti',
    model:'Fronx',
    year:'2025'
}

console.log('Car brand is: ',car.brand);

//Multiple Data Types – Create an object containing name (string), age (number), and
//isStudent (boolean) and print the name. Expected Output: Name: Aman

let Student = {
    name:"Barkha",
    age:23,
    isStudent: true,
}

console.log(Student.name);

//. Null Example – Create a variable and assign null to it, then print it. Expected Output: Value:null

let value = null;
console.log('value:' ,value);


//Undefined Example – Declare a variable without assigning a value and print it. Expected
//Output: Value: undefined

let un ;
console.log(un);


//Array of Objects – Create an array with 3 student objects and print the second student's
//name. Expected Output: Second student: Neha

let arrayOfStudent = [
    student1 ={
        name:'Barkha',
        age:23,
        course:'BA Programme'
    },
    student2 ={
        name:'rohan',
        age:28,
        course:'BCA'
    },
    student3 ={
        name:'Yash',
        age:16,
        course:'11th'
    }
];

console.log('second student name:',arrayOfStudent[1].name);



//15. Data Type Identification – Store string, number, boolean, array, and object in different
//variables and print their data types. Expected Output: string, number, boolean, object, object

let arrayofType = [
    'string',
    23, 
    true, 
    {
        name:'karan',
        age:4
    }
];

arrayofType.forEach(el => {
        console.log('type of data ',typeof(el));
        
});