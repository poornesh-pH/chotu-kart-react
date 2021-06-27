import { createStore, combineReducers } from 'redux';
import productsReducer from '../Reducers/productsReducer';
import filterReducer from '../Reducers/filterReducer';
import cartReducer from '../Reducers/cartReducer';
export default () => {
  const store = createStore(
    combineReducers({
      products: productsReducer,
      filters: filterReducer,
      cart: cartReducer
    })
  );
  return store;
};
