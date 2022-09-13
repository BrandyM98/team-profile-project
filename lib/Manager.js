const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officerNumber;
  }

  //this will return the the role
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
