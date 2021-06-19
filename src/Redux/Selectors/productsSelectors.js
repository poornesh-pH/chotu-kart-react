

export default  getVisibleProducts = (products, { sortByText, sortByA, sortByP }) => {
  const textFiltered = products.filter(
    product =>
      product.name.toLowerCase().includes(sortByText.toLowerCase()) ||
      product.author.toLowerCase().includes(sortByText.toLowerCase())
  );

  const availFiltered = () => {
    if (sortByA) return textFiltered.filter(product => product.stocked > 0);
    else return textFiltered;
  };
  const priceFiltered = availFiltered().sort((a, b) => {
    if (sortByP === 'low-high') return a.price < b.price ? -1 : 1;
    else if (sortByP === 'high-low') return a.price > b.price ? -1 : 1;
  });
  return priceFiltered;
};