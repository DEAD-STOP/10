const Intern = require("../lib/Intern");

test(`Function "getRole" should return "Intern"`, () => {
    const role = "Intern";
    const e = new Intern("Dingo", 1, "test@test.com", "MIT");
    expect(e.getRole()).toBe(role);
  });
  
  test(`Function "getSchool" should return "MIT"` , () => {
    const school = "MIT";
    const e = new Intern("Dingo", 1, "test@test.com", school);
    expect(e.getSchool()).toBe(school);
  });