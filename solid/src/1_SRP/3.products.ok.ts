class Connection {
  sqlConnection = new SqlConnection();
  get(table: string) {
    return this.sqlConnection.get(table);
  }
}

class Products {
  products = [];
  constructor(private readonly connection: Connection) {}
  getAllProducts() {
    const connection = this.connection.get('products');
    return connection.data;
  }
}
