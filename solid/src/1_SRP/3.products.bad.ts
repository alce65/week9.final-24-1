{
  class Products {
    products = [];
    getAllProducts() {
      const connection = new SqlConnection().get('products');
      return connection.data;
    }
  }
}
