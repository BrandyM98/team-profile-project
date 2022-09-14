//this would be the employee constructor
const Employee = require("../lib/Employee");

test("creates Employee obj", () => {
    const employee = new Employee('China', 12345, 'china@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.Id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//gets name
test('gets name', () => {
    const employee = new Employee('China', 12345, 'china@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

//gets id
test('gets id', () => {
    const employee = new Employee('China', 12345, 'china@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

//gets email
test('gets email', () => {
    const employee = new Employee('China', 12345, 'china@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//gets role
test('gets role', () => {
    const employee = new Employee('China', 12345, 'china@gmail.com');
    expect(employee.getRole()).toEqual("Employee");
});
