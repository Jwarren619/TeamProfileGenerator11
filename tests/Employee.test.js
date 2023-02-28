const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("should create employee object", () => {
        const testName = "Jeremiah";
        const testId = 234;
        const testEmail = "jeremiah@fakeemail.com"
        const newEmployee = new Employee (
            testName, testId, testEmail
        )
    const testNameMethod = newEmployee.getName()
    expect(testNameMethod).toEqual(testName)
    })
})