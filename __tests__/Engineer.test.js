const Engineer = require("../lib/Engineer");

test("creates engineer obj", () => {
    const engineer = new Engineer('China', 12345, 'china@gmail.com', "BrandyM98");
    expect(engineer.github) .toEqual(expect.any(String));
});

//gets github
test('gets github', () => {
    const engineer = new Engineer('China', 12345, 'china@gmail.com', "BrandyM98");
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));

});


//gets role
test('gets role', () => {
    const engineer = new Engineer('China', 12345, 'china@gmail.com', "BrandyM98");
    expect(engineer.getRole()).toEqual("Engineer");
});