const filterDefaultValue = {
  sortByText: '',
  sortByP: 'low-high',
  sortByA: undefined
};
const filterReducer = (state = filterDefaultValue, action) => {
  switch (action.type) {
    case 'SORT_BY_PRICE':
      return { ...state, sortByP: action.sortByP };
    case 'FILTER_BY_TEXT':
      return { ...state, sortByText: action.sortByText };
    case 'FILTER_BY_AVAILABLITY':
      return { ...state, sortByA: action.sortByA };
    default:
      return state;
  }
};
