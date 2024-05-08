{
  type Worker = {
    eat: () => void;
    work: () => void;
    sleep: () => void;
  };

  class Chef implements Worker {
    work() {
      console.log('cooking');
    }

    sleep() {
      throw new Error('Method not implemented.');
    }

    eat() {
      console.log('eating');
    }
  }

  class Driver implements Worker {
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
  pepe.sleep();
}
