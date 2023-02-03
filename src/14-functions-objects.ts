(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const login = (data: {email: string, password: string}) => {
    console.log(data.email, data.password);
  }

  // login('example@example.com', '1235');

  login({
    email: 'example@example.com',
    password: '1235'
  });

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  };
  addProduct({
    title: 'prod',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
    size: 'L'
  });
  console.log(products);

})();
