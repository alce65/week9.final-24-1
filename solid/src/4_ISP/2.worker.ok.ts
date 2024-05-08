{
  type CanWork = {
    work(): void;
  };

  type CanEat = {
    eat(): void;
  };

  type CanSleep = {
    sleep(): void;
  };

  class Chef implements CanWork, CanEat {
    work() {
      console.log('cooking');
    }

    eat() {
      console.log('eating');
    }
  }

  class Driver implements CanWork, CanSleep, CanEat {
    work() {
      console.log('driving');
    }

    sleep() {
      console.log('sleeping');
    }

    eat() {
      console.log('eating');
    }
  }

  const pepe = new Chef();
  // Not possible error call pepe.sleep();
}
