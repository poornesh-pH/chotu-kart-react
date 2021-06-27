const defaultCart = [];

export default (state = defaultCart, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.id];

    case 'REMOVE_FROM_CART':
      return state.filter(item => item !== action.id);
    default:
      return state;
  }
};
