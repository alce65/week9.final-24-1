/* eslint-disable @typescript-eslint/prefer-readonly */

// Alternativa que cumple con el principio de responsabilidad única
{
  class Employee {
    constructor(
      private name: string,
      private id: number,
      private hours: number
    ) {}

    calculateSalary() {
      // Calculate salary
    }
  }

  class Report {
    reportHours(employee: Employee) {
      // Report hours
    }
  }

  class EmployeeRepository {
    save(employee: Employee) {
      // Save employee
    }
  }
}
