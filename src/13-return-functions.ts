(() => {
  const calcTotal = (prices: number[]): number => prices.reduce((acc, curr) => acc + curr)
  // console.log(calcTotal([1,4,5,6,7]))

  const printTotal = (prices: number[]): void => {
    console.log(`The total price is ${calcTotal(prices)}`);
  }

  printTotal([1,4,5,6,7]);
})();

