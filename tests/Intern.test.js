const Intern = require('../lib/Intern');

describe("Intern", () => {
    it("this should create an intern object", () => {
        const testName = "Sarah";
        const testId = 481;
        const testEmail = "sarah@fakeemail.com";
        const testSchool = "elementary school" 
        const newIntern = new Intern (
            testName, testId, testEmail, testSchool
        )
        const testSchoolMethod = newIntern.getSchool()
        expect(testSchoolMethod).toEqual(testSchool)
    })
})