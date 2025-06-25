const accountId = 144553
let accountEmail = "aditya@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // This will throw an error because accountId is a constant
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity]); 

/*
Prefer not to use var, use let or const instead.
because of issue in block scope and functional scope.
const is used for constants, let is used for variables that can change, and var is function-scoped.
Using const and let helps to avoid issues with variable hoisting and scope confusion.
Variables declared with let and const are block-scoped, meaning they are only accessible within the block
they are defined in, while var is function-scoped.
This means that variables declared with var can be accessed outside of the block they are defined in,
which can lead to unexpected behavior.
Using const and let also makes the code more readable and maintainable, as it is clear whichvariables
are meant to be constants and which are meant to be variables that can change.
This is a best practice in JavaScript development.              

*/