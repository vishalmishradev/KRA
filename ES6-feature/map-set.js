//7. map and set

//map: its an object store key : value pair like object
//but in normal objcetr keys are string but here key can be any type objects, functions, primitive value

//example of set 
//set : it contains only unique values

let numbers = new Set();

numbers.add(10);
numbers.add(20);
numbers.add(20);
numbers.add(10);
numbers.add(15);

console.log(numbers); // output : 10, 20, 15


// example of map

let number = [1, 2, 3, 4];

let result = number.map(function(num) {
  return num * 2;
});

console.log(result); //[ 2, 4, 6, 8 ]
