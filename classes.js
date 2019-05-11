class Person {
  constructor(fname, lname, dob) {
    this.fname = fname;
    this.lname = lname;
    this.dob = new Date(dob);
    //console.log(this.dob);
  }

  greet = function() {
    return `Hello ${this.fname} What's up`;
  };

  getAge = function() {
    const temp = Date.now() - this.dob.getTime();

    const x = new Date(temp);

    return Math.abs(x.getUTCFullYear() - 1970);
  };
}

var marie = new Person("Mary", "johnson", "11-13-1980");

console.log(marie.getAge());

// now inheritance

class Customer extends Person {
  constructor(fname, lname, dob, phone) {
    super(fname, lname, dob);
    this.phone = phone;
  }

  //can override the greet method or use parent class method

  greet = function() {
    return `Hey ${this.fname} don't be a greedy b**ch`;
  };
}

//before overriding.

var john = new Customer("John", "Doe", "10-10-1983", "438-993");
console.log(john.greet()); //Hello John What's up
console.log(john.getAge());

//after overriding
console.log(john.greet()); //Hey John don't be a greedy b**ch
