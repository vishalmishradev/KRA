//rest operator
//it is used to gather remaining elemnet of an array, object, or function arguments into a single variable

// function parameter

function sum(...numbers) {
  return numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

console.log(sum(1, 2, 3, 4, 5)); //15

//array destructuring

let numbers = [10, 20, 30, 40, 50, 60];
const [first, second, ...rest] = numbers;

console.log(first, second, rest);


const person = { name: "Vishal", age: 27, city: "JSR", job: "SDE" };

const { name, age, ...details } = person;
console.log(details); // { city: 'JSR', job: 'SDE' }