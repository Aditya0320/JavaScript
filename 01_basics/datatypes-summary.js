//  Primitive 

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol ('123')

// console.log(id === anotherId);

// const bigNumber = 345678893234n



// Reference Type or Non-Primitive 

// Array, Objects, Functions 

const heros = ["Shaktiman", "doga", "Ben20"];
let myObj = {
name: "Aditya",
age: 21,
}

const myFunction = function(){
    console.log("Helloworld");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3