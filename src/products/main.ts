import { addProduct, calcStock, products } from './product.service';

addProduct({
  title: 'prod1',
  createdAt: new Date(1993, 1, 1),
  stock: 12,
  size: 'L'
});

addProduct({
  title: 'prod2',
  createdAt: new Date(1993, 1, 1),
  stock: 12,
  size: 'L'
});

console.log(products);
console.log(calcStock());
