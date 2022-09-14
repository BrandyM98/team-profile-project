const Intern = require("../lib/Intern");

test("creates intern obj", () => {
    const intern = new Intern('China', 12345, 'china@gmail.com', "CBU");
    expect(intern.school) .toEqual(expect.any(String));
});

//gets school
test('gets school', () => {
    const intern = new Intern('China', 12345, 'china@gmail.com', "CBU");
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));

});

//gets role
test('gets role', () => {
    const intern = new Intern('China', 12345, 'china@gmail.com', "CBU");
    expect(intern.getRole()).toEqual("Intern");
});
