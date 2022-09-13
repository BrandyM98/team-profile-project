const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  //this will return the github
  getGithub () {
    return this.github;
  }

  //this will return the the role engineer
  getRole () {
    return "Engineer";
}

}

module.exports = Engineer;
