// currying method using bind method

let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 8);
// here it will take 2nd argument using bind it will carry the values till calling the bind method

multiplyByTwo(10);

let multiplyByThree = multiply.bind(this, 8, 8);
// here if your passing the more arguments it`ll take the value from here

multiplyByThree(10);

//currying method using closer

let sum = function (a) {
  return function (b) {
    console.log(a + b);
  };
};

let sumOfTwo = sum(5);
sumOfTwo(3);

let sumOfThree = sum(6);
sumOfThree(4);
