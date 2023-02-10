//* Understand the problem 
// write a function which takes two numbers and returns their sum? 
/* 
? Can I restate the problem in my own words?
  - We have to write a function that adds two numbers
? What are the inputs that go into the problem?
  !ask yourself!: How large are the numbers going to be?
  - Int? 
  - Float? 
  - String for large numbers?
? What are the outputs that should come from the solution to the problem? 
  - Total of the two inputs but will we be using Int? Float? String? 
? Can the outputs be determined from the inputs? Do I have enough information to solve the problem? 
  - What if the user only inputs one number? We would not have enough information to run the algorithm. *good point to ask interviewer
? How should I label the important pieces of data that are a part of the problem? 
  - Labels will be num 1 and num 2 as the arguments. the result of the algoritm in our return would be sum. 
*/

/*
//* Explore Examples
  - Start with simple examples
  - Progress to more complex examples
  - Explore examples with empty Inputs
  - Explore examples wiht invalid inputs 
*/

//Example: 
// Write a function which takes in a string and returns counts of each character in the string. 
// charCount("aaaa") // {a: 4}
// charCount("hello") // {h: 1, e: 1, l: 2, o: 1}
/* Questions: 
  - should we include the letters that aren't there? (i.e. 'b', 'c', 'd', 'e')
*/

//* Break it down
/* 
Write a function which takes in a string and returns counts of each character in the string. 
*/

function charCount(str) {
  //  make object to return at end 
  // loop over string for each character...
    // if char is a number/letter AND is a key in object, add one to count
    // if char is number/letter AND is not a key in object, add it and set value to 1 
    // if char is something else, (space or puncuation), dont do anything 
  // return object at end 
}

