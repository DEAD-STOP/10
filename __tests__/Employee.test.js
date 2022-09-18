const Employee = require('../lib/Employee');

test("Sets name via constructor arg", () => {
    const name = "Austin";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });

test("Sets id via constructor arg", () => {
    const id = 421;
    const e = new Employee("Nobody", id);
    expect(e.id).toBe(id);
  });

test(`Function "getEmail" returns "test@test.com"`, () => {
    const email = "test@test.com";
    const e = new Employee("Foo", 1, email);
    expect(e.getEmail()).toBe(email);
  });
  
test(`Function "getRole" should return "Employee"`, () => {
    const role = "Employee";
    const e = new Employee("Alice", 1, "test@test.com");
    expect(e.getRole()).toBe(role);
  });