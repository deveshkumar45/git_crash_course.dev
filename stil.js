const nameRog = "devesh";

const newName = {
  age: 18,
  mitra: "Adhar_card",
  printDetails: function () {
    console.log(`My age is ${this.age} and name is: ${nameRog}`);
  },
};

// Call the method
newName.printDetails();

let myArry = [1, 2, 3, 4, 5, 6]
for (let index = 0; index <myArry.length; index++) {
  const element = myArry[index];
  console.log(element);
  
}
let meArry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let index = 0; index <meArry.length; index++) {
  const element = meArry[index];
  console.log(element);
  
}

let devArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < devArray.length; index++) {
  const element = devArray[index];
  console.log(element);
}

console.log("hello dear fellow students !")