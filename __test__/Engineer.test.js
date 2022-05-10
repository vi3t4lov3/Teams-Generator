const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe("Initialization", () => {
        

        //  Manager should have gihub account 
        it ("should have a github via constructor arguments", () => {
            // Arrange
            const github = "tu";
            // Act
            const engineer = new Engineer("Nguyen", 1, "test@emaial.com", github);
            // Assert
            expect(engineer.github).toBe(github);
        });
        // Testing the engineer Methods
        it ("should get id via getGithub()", () => {
            // Arrange
            const github = "tu";
            // Act
            const engineer = new Engineer("Nguyen", 1, "test@email.com", github);
            const engineerGithub = engineer.getGithub();
            // Assert
            expect(engineerGithub).toBe(github);
        });
        it ("should get id via getRole()", () => {
            // Arrange
            const role = "Engineer";
            // Act
            const engineer = new Engineer("Nguyen", 1, "test@email.com", "Engineer");
            const engineerRole = engineer.getRole();
            // Assert
            expect(engineerRole).toBe(role);
        });
    });
});