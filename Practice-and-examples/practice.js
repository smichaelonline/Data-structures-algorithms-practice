//* Suppose we want to write a function that calculates the sum of all numbers from 1 up to(and including) some number n. 

//? More efficient solution: (tests return .0001 of a second)
/*
  function addUpTo(n) {
    return n * (n + 1) / 2
  }
  3 operations running (multiplications, addition, division)
  O(1)
*/

// O(n) : number of operations is bounded by a multiple of n (loops will usually be this)
function addUpTo(n) {
  // accumulator which will be the variable that is returned at the end of the function. 
  let total = 0
  // for loop, loops through each number and adds number to total. 
  for(let i = 1; i <= n; i++){
    total += i
  }
  return total
}

// test is checking for speed of above function 
let t1 = performance.now()
addUpTo(1000000000)
let t2 = performance.now()
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`)
// test returns 0.9163556661605835 seconds. on first return 

console.log(addUpTo(6))
// returns 21 