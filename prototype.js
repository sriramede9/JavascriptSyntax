function Person(fname, lname, dob) {
  this.fname = fname;
  this.lname = lname;
  this.dob = new Date(dob);
}

Person.prototype.greet = function() {
  return `${this.fname} ${this.lname}`;
};

//const maria = new Person("Kwinnick", "sri", "10-10-1990");

//console.log(maria.greet()); // Kwonsri.
//console.log(maria.test());

function Customer(fname, lname, dob, phone) {
  Person.call(this, fname, lname, dob); //before class and extends we mean ES5

  this.phone = phone;
}
// still our customer cannot mess with prototype methods of Person

//console.log(james.test()); does not work
//console.log(james.greet());

Customer.prototype = Object.create(Person.prototype);

let james = new Customer("James", "Arthur", "10-10-1900", "4646485");
//console.log(james.test()); //still cannot.

console.log(james.greet());
// to set constructor

//Customer.prototype.constructor = Customer;

console.log(james);
// to override person greet prototype

Customer.prototype.greet = function() {
  return `yeah ${this.fname}  tired of your old style`;
};

console.log(james.greet());
