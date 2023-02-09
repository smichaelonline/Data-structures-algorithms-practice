# Data-structures-algorithms-practice
General notes from Udemy Data Structures and Algorithms course. 

## Notes 

#### Big-O Notation 
The way of describing a realtionship about the runtime of algorithm growth as the input grows 

O(n): runtime is based on n - as n grows, runtime grows 
O(n<sup>2<sup>): as n grows the runtime grows to the rate of n squared 
- is an O(n) operation inside of an O(n) operation
O(1): constant. Takes roughly the same amount of time throughout

**As n grows how does that reflect in the runtime?**

- Space Complexity: 
  - How much memory do we need to allocate in order to run the code in our algorithm? 
  - Rules of thumb:
    - Most primitives (booleans, numbers, undefined, null) are constant space. 
    - Strings require O(n) space 
    - Reference types are generally O(n) where n is the length(arrays) or the number of keys(objects)

