

the function should take a number, return to see what we input (console log)

apply the algo
    .keep as a number data type, loop, select every other digit (__ method - right to left)
    (ex: i = array.length; i >= 0, i -= 2;)

    .double every other digit = [];

    .if doubled digit is >9 , add new digit as a sum of itself

    .add new digit as a sum of itself, 
    
    .if/then re-insert into array,loop?

    .

verify that sum of all digits do not end in 0 & inputted number needs to be 15 or 16 digits
  
```
TESTS:

Describe: luhnsAlgorithm();

Test #1: "It should take a multi-digit number as a string and split its digits into elements of a new array." 
Code:
const multiDigitNumber = "1234567890123456";
luhnsAlgorithm(multiDigitNumber);
Expected Output: 
["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6"];

Test #2: It should select every other digit starting from the right and store as a new array.
Code:
const multiDigitNumber = "1234567890123456";
Expected Output:
["2", "4", "6", "8", "0", "2", "4", "6"];
```
