(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  };
  const login = (data: {email: string, password: string}) => {
    console.log(data.email, data.password);
  }

  // login('example@example.com', '1235');

  login({
    email: 'example@example.com',
    password: '1235'
  });

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  };
  addProduct({
    title: 'prod',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
    size: 'L'
  });
  console.log(products);
  products.push({
    title: 'pord',
    createdAt: new Date(1993, 1, 1),
    stock: 2,
    size: 'S'
  })
})();
