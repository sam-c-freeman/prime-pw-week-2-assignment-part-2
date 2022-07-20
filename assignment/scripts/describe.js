// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called named and set it equal to the string "Dane"
// The next chunk checks if the variable name matches/is set equal to the name "Mary"
// If yes, it will console log "Hi, Mary"
//If it doesn't (in this case), it will log "How do you do?"  Since Dane is not Mary, we will see the console log "How do you do?"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable called 'secret' and leave it undefinined
// We create a variable called 'code' and set it equal to the number 123
// The next part checks if code is a strict type match (exactly equal to without type conversion) 123.  
//If it is, secret is now assigned the string 'super' and code is re-defined as 123 * (times) 2
//Secret is now equal to 'super' and code is equal to 246
//The next section checks if code is greater than 250. If so secret is redefined as 'duper'
//The last line logs the value of secret which is currently 'super'.


//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// The first line creates a variable called 'isStudent' and sets it equal to true
// The second line establishes a variable called 'age' and sets it equal to 34
// The next line creates a variable called 'zip' and sets it equal to 55407
//The next code block first checks if isStudent is true AND if zip is greater than 80000.  If so, it will log "You're a student on the west coast"
//If that is not true (for both conditions), it next checks if isStudent is false or age is less than 30.  If either is true it will console log "What are your hobbies"?
//If that does not execute it next checks if isStudent is true.  If yes, it logs "Welcome to Prime"
//If none of those code blocks execute (conditions are satisified), it will log "How about the weather"?
//In this case (as variables are set), it will log "Welcome to Prime"!


//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//FIX- colorOne should be set to 'blue, and colorTwo should be set to 'red'
// let colorOne = 'blue';
//let colorTwo = 'red';

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  //FIX colorTwo should also be set to 'purple' in this part of the code block.


  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;


// FIX- this part of the code block should check temp AND time
// if (temp > 39 && time >=4)   <--- like this

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//FIX- the conditonal currently checks if minAge is less than or equal to age.  It is true so it would 
//console 'no entry'
//It could be re-written (according to the logic above) as:

if (age >= minAge){
  console.log('enter');
} else {
  console.log('no entry');
}

//end my fix

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

