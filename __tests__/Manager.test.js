const Manager = require("../lib/Manager");

test(`Function "getRole" should return "Manager"`, () => {
    const role = "Manager";
    const e = new Manager("Hurdy", 1, "test@test.com", 100);
    expect(e.getRole()).toBe(role);
  });
  
  test(`Function "getOfficeNum" should return "100"`, () => {
    const offNum = 100;
    const e = new Manager("Hurdy", 1, "test@test.com", offNum);
    expect(e.getOfficeNum()).toBe(offNum);
  });