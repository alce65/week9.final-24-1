{
  // First iteration
  class Rectangle {
    constructor(public width: number, public height: number) {}

    public setWidth(width: number) {
      this.width = width;
    }

    public setHeight(height: number) {
      this.height = height;
    }

    getArea() {
      return this.width * this.height;
    }
  }

  class Square extends Rectangle {
    constructor(public side: number) {
      super(side, side);
    }

    public setWidth(width: number) {
      // A square must maintain equal sides
      super.setWidth(width);
      super.setHeight(width);
    }

    public setHeight(height: number) {
      super.setWidth(height);
      super.setHeight(height);
    }
  }

  // This is a violation of the Liskov Substitution Principle
  // because we can't substitute the base class (Rectangle)
  // with a derived class (Square)
  const rectangle = new Rectangle(2, 3);
  rectangle.setWidth(4);
  rectangle.setHeight(5);
  console.log('Rectangle 1', rectangle.getArea()); // 20
  rectangle.setWidth(5);
  rectangle.setHeight(4);
  console.log('Rectangle 2', rectangle.getArea()); // 20

  const square = new Square(2);
  square.setWidth(4);
  square.setHeight(5);
  console.log('Square1', square.getArea()); // 25
  square.setHeight(5);
  square.setWidth(4);
  console.log('Square2', square.getArea()); // 16
}
