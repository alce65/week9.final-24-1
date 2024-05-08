{
  // First iteration
  class Rectangle {
    constructor(public width: number, public height: number) {}
  }

  class AreaCalculator {
    calculate(shapes: Rectangle[]) {
      return shapes.reduce((sum, shape) => sum + shape.width * shape.height, 0);
    }
  }
}

{
  // Second iteration, open for modification (Error)
  class Rectangle {
    constructor(public width: number, public height: number) {}
  }

  class Circle {
    constructor(public radius: number) {}
  }
  class AreaCalculator {
    calculate(shapes: Array<Rectangle | Circle>) {
      return shapes.reduce((sum, shape) => {
        if (shape instanceof Rectangle) {
          return sum + shape.width * shape.height;
        }

        if (shape instanceof Circle) {
          return sum + Math.PI * shape.radius ** 2;
        }

        return sum;
      }, 0);
    }
  }
}
