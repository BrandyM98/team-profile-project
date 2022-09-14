//employee instructor
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email
  }
//this will return the name
  getName () {
    return this.name;
  }
//this will return the id
  getId () {
    return this.id;
  }
//this will return the email
  getEmail () {
    return this.email;
  }
//this will return the employee type
  getRole () {
    return 'Employee';
  }
};

module.exports = Employee;
