//• 1 se 10 tak numbers print karo.

let i =1;
for(let i =0; i<=10; i++){
    // console.log(i);

}

//• 10 se 1 tak reverse loop chalao.
let b=10;
for(b=10; b >=0; b--){
    // console.log(b);
    
}

//• Array ke elements print karo.
let arr = ['rohan','barkha'];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    // console.log(element);
    
}

//• 1–20 tak even numbers print karo.
for(i=0; i<=20; i++){
    if(i % 2 == 0){
        // console.log(i);
        
    }
}

//• Multiplication table print karo.
let number = 12;
let x = 1;

while (x<=10) {
    console.log(`${number} * ${x} = ${number *x}`);
    x++ 
}

//• 2. while Loop – Use a while loop to print numbers from 1 to 5.
let a = 0;
while (a <6) {
    // console.log(a);
    a++
    
}


//• 3. do while Loop – Use a do while loop to print numbers from 1 to 3.
let c = 1;

do {
    // console.log(c);
    c++
    
} while (c<=3);

//• 4. Even Numbers – Use a for loop to print even numbers from 1 to 10.


for (let e = 1; e <= 10; e++) {
    if (e % 2 === 0) {
        // console.log(e);
    }
}

//• 5. Array Print (for...of) – Store 3 fruits in an array and print them using for...of loop.
let fruits = ['apple', 'mango', 'banana'];

for (const el of fruits) {
    // console.log(el);
    
}

//6. Sum of Numbers – Use a for loop to calculate the sum of numbers from 1 to 10. Expected Output: Sum: 55

let sum = 0;
for (let i = 0; i <= 10; i++) {
    sum = sum+i;
    
}
// console.log('sum:', sum);


//Countdown – Use a while loop to print numbers from 10 down to 1.
let n = 10;

while (n >= 1) {
    // console.log(n);
    n--;
    
}

//. Array Elements – Store 5 numbers in an array and print them using for...of loop.
let numbers = [1,2,3,4,5,];

for (const el of numbers) {
    // console.log(el);
    
}

//• 9. Object Keys – Create an object with name, age, city and print the keys using for...in loop.
let obj ={
    name:"Yash",
    age:17,
    city:"Delhi"
}

for (const key in obj) {
    
    const el = obj[key];
        
    console.log(el);
    
   
}

