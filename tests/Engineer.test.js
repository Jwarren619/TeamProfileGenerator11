const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
   it("should create the engineer object", () => {
        const testName = "Lewis";
        const testId = 8;
        const testEmail = "Lewis@aol.com";
        const testGitHub = "Jwarren"
        const newEngineer = new Engineer (
            testName, testId, testEmail, testGitHub
        )
        const testGitHubMethod = newEngineer.getGithub()
        expect(testGitHubMethod).toEqual(testGitHub)
   } )
})