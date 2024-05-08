{
  // Liskov Substitution Principle

  type Shape = {
    getArea(): number;
  };

  class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}

    setWidth(width: number) {
      this.width = width;
    }

    setHeight(height: number) {
      this.height = height;
    }

    getArea() {
      return this.width * this.height;
    }
  }

  class Square implements Shape {
    constructor(public side: number) {}

    setSide(side: number) {
      this.side = side;
    }

    getArea() {
      return this.side ** 2;
    }
  }

  const rectangle = new Rectangle(2, 3);
  rectangle.setWidth(4);
  rectangle.setHeight(5);
  rectangle.getArea(); // 20
  const square = new Square(2);
  square.setSide(4);
  square.getArea(); // 16
}
