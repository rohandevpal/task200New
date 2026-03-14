//• Ek variable 'name' banao aur usme apna naam store karke console me print karo.

let name = "Rohan pal";
// console.log(name);


//• let use karke do numbers add karo.

let num1 = 1;
let num2 = 3;

// console.log(num1+num2);


//const me PI value store karo.
const PI = 3.14;
// console.log(PI);

//• Age variable banao aur message print karo: My age is ...
let age = 26;
// console.log("my age is ",age);


//: Ek variable ki value change karke dobara print karo
let data = "rohan";
data = "Barkha";
// console.log(data);


//Multiple variables ek line me declare karke print karo.
let one = "one", two = "two", three= 'three';

// console.log(one, two, three);


//Ek object variable me store karo aur uski property access karo
let studentData = {
    name:"rohan",
    age:27,
    course:"BCA",
    category: "Intermediate"
}

// console.log(studentData.name);


//Ek array variable me store karo aur usko loop se print karo.
let arr = ['rohan', 'barkha', 'husband', 'wife']

for(i=0; i<= arr.length; i++){
    // console.log(arr[i]);
}


//Block scope test karo using let aur var.
{
    let o = "option";
    // console.log(o);
    
}

// console.log(o);


//Function ke andar variable declare karke bahar access test karo.
function myFun(){
    let data = "me";
    // console.log(data);   
    
}
// console.log(myFun());


//Function ke andar variable declare karke bahar access test karo.
function testVar(){
    let testVar = "rohan";
    // console.log(testVar);
    
}
testVar();
// console.log(testVar);


//Destructuring use karke variables extract karo.
let array = ['rohan', 'barkha', 'karan', 'tarun','yuvi', 'naman', 'Yash'];

let [a,b,c,d] = array;

//loop use krke 
array.forEach(el => {
    // console.log(el);
});

//Task 11: Spread operator use karke array copy karo.
// Hint: modern JavaScript features jaise destructuring, spread, async concepts try karo.

let originalArray = [1,2,3,4,5,6,7];

let copiedArray = [...originalArray];

// console.log('copied array:', copiedArray);



//Object ko merge karne ka logic likho.
let obj1 ={
    name:"Rohan",
    course:"BCA",
    RollNumber:"25",
    Interst:"Singing"
}

let obj2 = {
    wifeName:"Barkha",
    wifecourse:"BA Programme",
    wifeRollNumber:"21",
    wifeInterst:"Scrolling"
}

let mergedObject = {...obj1, ...obj2}
// console.log(mergedObject);


//Optional chaining ka example banao.
let newobj ={
    name:"Rohan",
    address:{
        city:"Delhi",
    }
}
let newobj2 ={
    name:"Rohan",
    
}

// console.log(newobj.address?.city);
//if i remove ? so it will print "error"
// console.log(newobj2.address.city);

//Default values ke saath destructuring use karo

let user = {
    value:"barkha"
};

// destructuring with default value
const { value, username = 20 } = user;
// console.log(value);
// console.log(username);


//Dynamic variables / properties create karo.
let key = "age";

const newUser  = {
    username: "Rohan",
    [key] : 27,
}

console.log(newUser);




