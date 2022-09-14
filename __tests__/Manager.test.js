const Manager = require("../lib/Manager");

test("creates manager obj", () => {
    const manager = new Manager('China', 12345, 'china@gmail.com', 6);
    expect(manager.officeNumber) .toEqual(expect.any(Number));
});

//gets role
test('gets role', () => {
    const manager = new Manager('China', 12345, 'china@gmail.com');
    expect(manager.getRole()).toEqual("Manager");
});