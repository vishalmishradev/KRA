// 2. arrorw functions

//normal function
let pro = function (a, b) {
  return a * b;
};
console.log(pro(2,3));

//arrow function

let Product = (a, b) => a * b;
console.log(Product(4,5));

//arrow function don't have their own this thats why when we create object method arrow function doesn't refer to the object but normal function refer to object it self
//arrow function is not hoisted so means we can't acess it before declearion