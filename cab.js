//Call, Apply and Bind methods in javascript

let printFullName = function (city, state) {
  console.log(
    this.firstName + " " + this.lastName + ", " + city + ", " + state
  );
};

// call method with arguments

let name = {
  firstName: "Sai",
  lastName: "Krishna",
};

printFullName.call(name, "Hyderabad", "Telangana");

let name2 = {
  firstName: "Vamsi",
  lastName: "Ankabattula",
};

// function borrowing

// printFullName.call(name2, "Bangalore", "Karnataka");

// function currying

let consoleName = (firstName, lastName) => {
  console.log(firstName + " " + lastName);
};

consoleName(name.firstName, name.lastName);
// consoleName.call(name, name.firstName, name.lastName);

// apply method with arguments

printFullName.apply(name2, ["Bangalore", "Karnataka"]);

// bind method

let name3 = {
  firstName: "mohan",
  lastName: "kumar",
};

let consoleName2 = printFullName.bind(name3, "Chennai", "Tamilnadu");
consoleName2();
