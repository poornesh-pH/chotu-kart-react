const defaultCart = [];

export default (state = defaultCart, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        id: action.id
      };
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== state.id);
    default:
      return state;
  }
};
