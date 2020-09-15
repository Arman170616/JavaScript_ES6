// String using Spread Operator


let str = "hello";
let newStr = [...str];
console.log(newStr);



// Array using Spread Operator 


let fruit1 = ['Apple', 'banana','Mango'];
fruit2 = ['orange', 'Grape',];
newFruit = "Jackfruit";

let newArr = [...fruit1, ...fruit2, newFruit];
console.log(newArr);



// Object using Spread Operator 


let Person = {
    fname:"John",
    lname:"deo",
}
let NewPerson = {...Person}

console.log(NewPerson);


// Function parameter using Spread Operator 

let person = ['Arman','hossain']
let test = (fname, lname) => {
    console.log(fname, lname);
}
test(...person);
