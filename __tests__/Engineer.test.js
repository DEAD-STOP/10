const Engineer = require("../lib/Engineer");

test(`Function "getRole" should return "Engineer"`, () => {
    const role = "Engineer";
    const e = new Engineer("Manson", 1, "test@test.com", "MeThOd_MaN");
    expect(e.getRole()).toBe(role);
  });
  
  test(`Function "getGithub" should return "MeThOd_MaN"`, () => {
    const github = "MeThOd_MaN";
    const e = new Engineer("Manson", 1, "test@test.com", github);
    expect(e.getGithub()).toBe(github);
  });