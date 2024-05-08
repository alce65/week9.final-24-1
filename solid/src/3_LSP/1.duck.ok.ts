type Fly = {
  fly(): void;
};

type Swim = {
  swim(): void;
};

type Quack = {
  quack(): void;
};

class Duck implements Fly, Swim, Quack {
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

class RubberDuck implements Swim, Quack {
  swim() {
    console.log('swim');
  }

  quack() {
    console.log('quack');
  }
}

class DuckProcess {
  makeDucksFly(duck: Fly[]) {
    duck.forEach((duck) => {
      duck.fly();
    });
  }
}
