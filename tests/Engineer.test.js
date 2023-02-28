const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
   it("should create the engineer object", () => {
        const testName = "Jeremiah";
        const testId = 234;
        const testEmail = "jeremiah@fakeemail.com";
        const testGitHub = "Jwarren"
        const newEngineer = new Engineer (
            testName, testId, testEmail, testGitHub
        )
        const testGitHubMethod = newEngineer.getGithub()
        expect(testGitHubMethod).toEqual(testGitHub)
   } )
})