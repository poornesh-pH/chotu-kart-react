import { createStore, combineReducers } from 'redux';
import productsReducer from '../Reducers/productsReducer';
import filterReducer from '../Reducers/filterReducer';

export default () => {
  const store = createStore(
    combineReducers({
      products: productsReducer,
      filters: filterReducer
    })
  )
  return store;
};
