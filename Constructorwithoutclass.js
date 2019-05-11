function Person(fname, lname, dob) {
  this.fname = fname;
  this.lname = lname;
  this.dob = new Date(dob);

  this.greet = function() {
    return `Hello ${this.fname} how you doing?`;
  };

  this.getDob = function() {
    const timeframe = Date.now() - this.dob.getTime();
    const x = new Date(timeframe);
    //console.log(x);
    return Math.abs(x.getUTCFullYear() - 1970);
  };

  this.getMarried = function(newname) {
    this.lname = newname;
  };

  this.fullname = function() {
    return `${this.fname} ${this.lname}`;
  };
}

let person = new Person("Sri", "ram", "10-10-1989");

let x = person.fullname();

x = person.getDob();

console.log(x);
