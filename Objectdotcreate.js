// step 1 Define prototype wiht default functions

const prot = {
  greet: function() {
    return `${this.fname} and ${this.lname}`;
  }
};

// next use object.create to get these in objects protoype.

var Sri = Object.create(prot);
Sri.fname = "Sri ram";
Sri.lname = "Ede";
console.log(Sri.greet());

const Brad = Object.create(prot, {
  fname: { value: "Brad" },
  lname: { value: "Traversy" }
});
console.log(Brad.greet());
