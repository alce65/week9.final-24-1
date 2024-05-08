{
  // Third iteration, open for extension (correct)

  // OCP: Open for extension, closed for modification
  // We can add new shapes without modifying the AreaCalculator class
  // Also sample of Liskov Substitution Principle:
  // we can substitute the base class
  // with a derived class
  // without affecting the program's behavior

  type Shape = {
    area(): number;
  };

  class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}
    area() {
      return this.width * this.height;
    }
  }

  class Circle implements Shape {
    constructor(public radius: number) {}
    area() {
      return Math.PI * this.radius ** 2;
    }
  }
}
