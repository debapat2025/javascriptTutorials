// Function chaining is a technique where multiple function calls are performed one after another on the same object.

// This works when each function returns the object itself (this) or another object that supports the next method.


// Interview Question

// Why do we return this in function chaining?

// Because this refers to the current object, and returning it allows the next method to be called on the same object.

const calculator = {
  value: 0,

  add(num) {
    this.value += num;
    return this; // return current object
  },

  subtract(num) {
    this.value -= num;
    return this;
  },

  multiply(num) {
    this.value *= num;
    return this;
  },

  result() {
    console.log(this.value);
    return this;
  }
};

calculator
  .add(10)
  .subtract(2)
  .multiply(5)
  .result();