// Big-O and objects
// objects are unordered value pairs 

/* 
Big O of objects:
  Insertion - O(1)
  Removal - O(1)
  Searching - O(n)
  Access - O(1)
*/

/* 
Built in object method:
  Object.keys - O(n)
  object.values - O(n)
  Object.entries - O(n)
  hasOwnProperty - O(1)
*/ 

let instructor = {
  firstName: "Kelly",
  isInstructor: true, 
  favoriteNumbers: [1,2,3,4]
}

// Arrays
// arrays are ordered lists

/* 
Big O of arrays:
  Insertion - depends on where element is inserted (end is O(1), beginning is O(n))
  Removal - same as above ^
  Searching - O(n)
  Access - O(1)
*/

/* 
Built in array method:
  push - O(1)
  pop- O(1)
  shift - O(n)
  unshift - O(n)
  concat - O(n)
  slice - O(n)
  splice - O(n)
  sort - O(N* logN)
  forEach, map, filter,reduce, etc. - O(n)
*/ 

let names = ["Michael", "Melissa", "Andrea"]

let values = [true, {}, [], 2, "Awesome"]