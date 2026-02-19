// There are generally three types of data types that are generally used in js, and they are let, const, and var;

var a=10;

function demo()
{
    a=20;
    let x=14;
    let y = 15;

    console.log("Inside demo function");
    console.log("Inside a:",a);
    console.log("Inside y: ", y);
}

demo();
console.log("Outside a: ", a); // since  var is not a block scoped it wont throw an error and can be redefined.
// console.log("Outside y:",y); //will thow an error as it is defind outside the scope as both let and const are blocked scoped.
// console.log("Outside x: ", x);//will thow an error as it is defind outside the scope as both let and const are blocked scoped.

