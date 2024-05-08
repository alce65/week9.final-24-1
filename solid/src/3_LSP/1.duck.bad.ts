{
  class Duck {
    fly() {
      console.log('fly');
    }

    swim() {
      console.log('swim');
    }

    quack() {
      console.log('quack');
    }
  }

  class RubberDuck extends Duck {
    // This override of the fly method
    // violates the Liskov Substitution Principle
    fly() {
      throw new Error('Cannot fly');
    }

    // Make by the parent class
    // swim() {
    //   console.log('swim');
    // }

    // quack() {
    //   console.log('quack');
    // }
  }

  // As a consequence, the DuckProcess class
  // has to handle the exception when calling the fly method
  class DuckProcess {
    makeDucksFly(duck: Duck[]) {
      duck.forEach((duck) => {
        try {
          duck.fly();
        } catch (error) {
          console.log('This duck cannot fly');
        }
      });
    }
  }
}
