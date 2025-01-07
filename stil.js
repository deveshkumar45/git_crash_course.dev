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
