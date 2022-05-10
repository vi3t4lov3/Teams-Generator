const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe("Initialization", () => {
        

        //  Intern should have office number
        it ("should have a school via constructor arguments", () => {
            // Arrange
            const school = "GA Tech";
            // Act
            const intern = new Intern("Nguyen", 1, "test@emaial.com", school);
            // Assert
            expect(intern.school).toBe(school);
        });
        // Testing the Intern Methods
        it ("should get id via getschool()", () => {
            // Arrange
            const school = "GA Tech";
            // Act
            const intern = new Intern("Nguyen", 1, "test@email.com", school);
            const internSchool = intern.getSchool();
            // Assert
            expect(internSchool).toBe(school);
        });
        it ("should get id via getRole()", () => {
            // Arrange
            const role = "Intern";
            // Act
            const intern = new Intern("Nguyen", 1, "test@email.com", "Intern");
            const internRole = intern.getRole();
            // Assert
            expect(internRole).toBe(role);
        });
    });
});