const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe("Initialization", () => {
        

        //  Manager should have office number
        it ("should have a office Number via constructor arguments", () => {
            // Arrange
            const officeNumber = 1;
            // Act
            const mananger = new Manager("Nguyen", 1, "test@emaial.com", officeNumber);
            // Assert
            expect(mananger.officeNumber).toBe(officeNumber);
        });
        // Testing the Manager Methods
        it ("should get id via getOffice()", () => {
            // Arrange
            const officeNumber = 1;
            // Act
            const manager = new Manager("Nguyen", 1, "test@email.com", officeNumber);
            const managerOfficeNumber = manager.getOffice();
            // Assert
            expect(managerOfficeNumber).toBe(officeNumber);
        });
        it ("should get id via getRole()", () => {
            // Arrange
            const role = "Manager";
            // Act
            const manager = new Manager("Nguyen", 1, "test@email.com", "Manager");
            const managerRole = manager.getRole();
            // Assert
            expect(managerRole).toBe(role);
        });
    });
});