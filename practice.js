//* Suppose we want to write a function that calculates the sum of all numbers from 1 up to(and including) some number n. 

function addUpTo(n) {
  // accumulator which will be the variable that is returned at the end of the function. 
  let total = 0
  // for loop, loops through each number and adds number to total. 
  for(let i = 1; i <= n; i++){
    total += i
  }
  return total
}

console.log(addUpTo(6))
// returns 21 