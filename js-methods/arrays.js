//array methods

const arr = [1,2,3,4];

arr.push(5); // pushed an element 
arr.push(9); // pushed an element 
arr.pop();   // removed an element from an array
arr.shift(); // removes first element from an array and if array is empty it returns undefined.
let v = arr.unshift(9); // adds an element at the start of an array and returns the new length of the array.
console.log(v);
console.log(arr);

//find 
let val = arr.find((num)=>{  // find method return the first matching value for which functions return true.
    return num%2===0
});
console.log(val);

//map
const square = arr.map((num)=> num*num);  // Calls a defined callback function on each element of an array, and returns an array that contains the results.
console.log(square);

//filter

let even = arr.filter((num)=> num%2===0); //Returns the elements of an array that meet the condition specified in a callback function.
console.log(even);


//reduce

let product = arr.reduce((curr, acc)=>acc*=curr,1); //itrates through each element of an array and return a single value.
console.log(product);
