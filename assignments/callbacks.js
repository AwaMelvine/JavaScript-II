// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

// Function invocation
getLength([1, 2, 3], length => {
  console.log("Array Length: ", length);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  const arrLastIndex = arr.length - 1;
  return cb(arr[arrLastIndex]);
}

// Function Invocation
last([2, 3, 4], lastElement => console.log("Last Element: ", lastElement));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

// Function Invocation
sumNums(2, 3, sum => console.log("Sum is: ", sum));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

// Function Invocation
multiplyNums(2, 3, product => console.log("Product is:", product));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item));
}

// Function Invocation
contains(2, [2, 3], status => console.log("Status of contains:", status));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const noDuplicates = [...new Set([1, 2, 2, 3, 4, 4])];
  return cb(noDuplicates);
}

removeDuplicates([1, 2, 2, 3, 4, 4], noDups =>
  console.log("No Duplicates: ", noDups)
);
