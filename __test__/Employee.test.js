const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe("Initialization", () => {
        //test the Employee should be an object include name id & email
        it("should instantiate an employee instance", () => {
            // Arrange
            const employee = new Employee();
            // Act

            // Assert
            expect(typeof employee).toBe("object");
        });

        // testing employee name, id email should get a name, id & email
        it ("should have a name via constructor arguments", () => {
            // Arrange
            const name = "Nguyen";
            // Act
            const employee = new Employee(name);
            // Assert
            expect(employee.name).toBe(name);
        });
        it ("should have an id via constructor arguments", () => {
            // Arrange
            const id = 1;
            // Act
            const employee = new Employee("Nguyen", id);
            // Assert
            expect(employee.id).toBe(id);
        });
        it ("should have an email via constructor arguments", () => {
            // Arrange
            const email = "test@email.com";
            // Act
            const employee = new Employee("Nguyen", 1, "test@email.com");
            // Assert
            expect(employee.email).toBe(email);
        });

        // Testing the Employee Methods
        it ("should get id via getName()", () => {
            // Arrange
            const name = "Nguyen";
            // Act
            const employee = new Employee ("Nguyen");
            const employeeName = employee.getName();
            // Assert
            expect(employeeName).toBe(name);
        });
        it ("should get id via getId()", () => {
            // Arrange
            const id = 1;
            // Act
            const employee = new Employee ("Nguyen", id);
            const employeeId = employee.getId();
            // Assert
            expect(employeeId).toBe(id);
        });
        it ("should get id via getEmail()", () => {
            // Arrange
            const email = "test@email.com";
            // Act
            const employee = new Employee ("Nguyen", 1, "test@email.com");
            const employeeEmail = employee.getEmail();
            // Assert
            expect(employeeEmail).toBe(email);
        });
        it ("should get id via getRole()", () => {
            // Arrange
            const role = "Employee";
            // Act
            const employee = new Employee ("Nguyen", 1, "test@email.com", "Employee");
            const employeeRole = employee.getRole();
            // Assert
            expect(employeeRole).toBe(role);
        });
    });
});