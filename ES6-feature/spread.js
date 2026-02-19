// 4. spread operator

//spread operator spreds array to individual elements

let numbers = [1, 2, -3, 23, -4, 5, 6];

let maxNum = Math.max(...numbers);
let minNum = Math.min(...numbers);


console.log(maxNum); //23
console.log(minNum); //-4


const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const combinedArray = [...nums1, ...nums2];
console.log(combinedArray); // [1,2,3,4,5,6]