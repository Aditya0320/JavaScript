const name = "Aditya"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is  ${name} and my repo count is ${repoCount}`);

const gameName = new String('Aditya_hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);
 
const newStringOne = "    Aditya     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://exceltechsolutions.com"

console.log(url.replace('tech', '_'));
 
console.log(url.includes('ggoj'));

console.log(gameName.split('_'));

