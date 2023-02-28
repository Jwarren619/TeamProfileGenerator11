const Manager = require('../lib/Manager');

describe("Manager", () => {
    it("should ceate the manager object", () => {
        const testName = "Lewis";
        const testId = 8;
        const testEmail = "lewisfake@email.com";
        const testOfficeNumber = 126.262
        const newManager = new Manager (
            testName, testId, testEmail, testOfficeNumber
        )
        const testOfficeNumberMethod = newManager.getOfficeNumber()
        expect(testOfficeNumberMethod).toEqual(testOfficeNumber)
    })
  
})