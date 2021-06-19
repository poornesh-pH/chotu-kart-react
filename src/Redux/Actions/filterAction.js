export const filterBytext = (sortByText = '') => {
  return {
    type: 'FILTER_BY_TEXT',
    sortByText
  };
};
export const sortByPrice = sortByP => {
  return {
    type: 'SORT_BY_PRICE',
    sortByP
  };
};
export const filterByAvailablity = sortByA => {
  return {
    type: 'FILTER_BY_AVAILABLITY',
    sortByA
  };
};
