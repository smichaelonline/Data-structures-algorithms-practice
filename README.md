# Data Structures and Algorithms Notes
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

### Approach to Problem Solving 
**Algorithm**: a process or set of steps to accomplish a certain task 

_Steps to improve:_
  - Devise a plan for solving the problem
  - Master common problem solving patters

_Steps to take when problem solving:_ 
Refer to Problem Solving file for examples breaking down the below. 
  - *Understand the problem*
    - Can I restate the problem in my own words?
    - What are the inputs that go into the problem?
    - What are the outputs that should come from the solution to the problem? 
    - Can the outputs be determined from the inputs? Do I have enough information to solve the problem? 
  - *Exlore concrete examples*
    - Coming up with examples can help you understand the problem better
    - Examples provide a sanity check that shows how your solution should work
    - User Stories: given a user input, what is the output? 
    - Unit Tests
  - *Break it down*
    - Explicitly write out the steps you need to take
      - this forces you to think about code before you write it and will help flesh out any questions that need to be asked and catch any misunderstandings there are before diving in. 
  - *Solve/Simplify*
  - *Look Back and Refactor*

**Book recommendation** : *How to Solve It* by Geaorge Polya 


