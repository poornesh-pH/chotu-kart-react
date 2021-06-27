export const addToCart = (id) => {
  console.log(id ,"addtocart")
  return {
    type: 'ADD_TO_CART',
    id
  };
};

export const removeFromCart = ( id ) => {
  return {
    type: 'REMOVE_FROM_CART',
    id
  };
};
