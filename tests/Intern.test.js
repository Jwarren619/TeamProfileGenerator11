const Intern = require('../lib/Intern');

describe("Intern", () => {
    it("this should create an intern object", () => {
        const testName = "Lewis";
        const testId = 8;
        const testEmail = "Lewis@aol.com";
        const testSchool = "New Jersey High" 
        const newIntern = new Intern (
            testName, testId, testEmail, testSchool
        )
        const testSchoolMethod = newIntern.getSchool()
        expect(testSchoolMethod).toequal(testSchool)
    })
})