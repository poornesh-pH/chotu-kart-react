import { v4 as uuidv4 } from 'uuid';

//ADD_PRODUCT
export const addProduct = ({
  name = '',
  description = '',
  price = '',
  author = '',
  type = '',
  img = '',
  stocked = null,
  category = '',
  inCart = false
} = {}) => {
  return {
    type: 'ADD_PRODUCT',
    product: {
      id: uuidv4(),
      name,
      description,
      price,
      author,
      type,
      img,
      stocked,
      category,
      inCart
    }
  };
};
//REMOVE_PRODUCT
export const removeProduct = (id = '') => {
  return {
    type: 'REMOVE_PRODUCT',
    id
  };
};
//EDIT_PRODUCT

export const editProduct = ({
  id,
  name,
  description,
  price,
  author,
  type,
  img,
  stocked,
  category,
  inCart
}) => {
  console.log("editProduct action", inCart,id)
  return {
    type: 'EDIT_PRODUCT',
    product: {
      id,
      author,
      description,
      name,
      price,
      type,
      img,
      stocked,
      category,
      inCart
    }
  };
};
