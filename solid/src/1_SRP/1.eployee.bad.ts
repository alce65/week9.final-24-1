/* eslint-disable @typescript-eslint/prefer-readonly */

// Ejemplo de clase que no cumple con el principio de responsabilidad única
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

    reportHours() {
      // Report hours
    }

    save() {
      // Save employee
    }
  }
}
