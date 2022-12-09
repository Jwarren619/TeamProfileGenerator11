const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("should create employee object", () => {
        const testName = "Lewis";
        const testId = 8;
        const testEmail = "Lewis@aol.com"
        const newEmployee = new Employee (
            testName, testId, testEmail
        )
    const testNameMethod = newEmployee.getName()
    expect(testNameMethod).toEqual(testName)
    })
})