//3. Destructuring

//object destructuring

const sample = {
  name: "James",
  colour: "black",
  food: "paneer",
};

const { name, colour } = sample;
console.log(name, colour); //James black


//array destructuring
let persons = ["Ram ji", "Laxman ji", "Sitaji", "Bharat ji"];

const [person1, person2] = persons;

console.log(person1, person2); // Ram ji Laxman ji