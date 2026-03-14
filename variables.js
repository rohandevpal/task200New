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
    console.log(o);
    
}

// console.log(o);


//Function ke andar variable declare karke bahar access test karo.
function myFun(){
    let data = "me";
    // console.log(data);   
    
}
console.log(myFun());
