const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  //this will return the school
  getSchool () {
    return this.school;
  }

  //this will return the the role
  getRole () {
    return "Intern";
}

}

module.exports = Intern;
