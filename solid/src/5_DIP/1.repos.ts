type Repository = {
  getData(): void;
  save(data: string): void;
};

class MongoRepository implements Repository {
  getData() {
    console.log('Get data from Mongo database');
  }

  save(data: string) {
    console.log(`Save ${data} in Mongo database`);
  }
}

class SqlRepository implements Repository {
  getData() {
    console.log('Get data from Sql database');
  }

  save(data: string) {
    console.log(`Save ${data} in Sql database`);
  }
}

class Controller {
  constructor(private readonly repository: Repository) {
    this.repository = repository;
  }

  getData() {
    this.repository.getData();
  }

  saveData(data: string) {
    this.repository.save(data);
  }
}

const repository1 = new MongoRepository();
const controller1 = new Controller(repository1);
const repository2 = new SqlRepository();
const controller2 = new Controller(repository2);
