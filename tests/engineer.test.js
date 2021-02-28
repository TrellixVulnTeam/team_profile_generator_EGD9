const Engineer = require("../lib/engineer");

test("set GitHUb account with constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Test", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Test", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Test", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});