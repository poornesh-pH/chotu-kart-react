export const addToCart = ({ id }) => {
  return {
    type: 'ADD_TO_CART',
    item: {
      id,
      count: 1
    }
  };
};
export const editCart = (id, count) => {
  return {
    type: 'EDIT_CART',
    item: {
      id,
      count
    }
  };
};
export const removeFromCart = id => {
  return {
    type: 'REMOVE_FROM_CART',
    id
  };
};
