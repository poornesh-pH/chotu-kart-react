const productsDefaultvalue = [];

export default (state = productsDefaultvalue, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.product];
    case 'REMOVE_PRODUCT':
      return state.filter(product => product.id !== action.id);
    case 'EDIT_PRODUCT':
      return state.map(product => {
        console.log(action)
        if (product.id === action.product.id) {
          return {
            ...action.product
          };
        } else return product;
      });
    default:
      return state;
  }
};
