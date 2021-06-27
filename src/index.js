import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'materialize-css/dist/css/materialize.min.css';
import configureStore from './Redux/Store/store';
import { Provider } from 'react-redux';
import { addProduct, editProduct } from './Redux/Actions/productsAction';
import AppRouter from './Router/AppRouter';
import {addToCart,removeFromCart} from './Redux/Actions/cartAction';
const store = configureStore();

const product1 = store.dispatch(
  addProduct({
    name: 'The Power of HABIT',
    description:
      'The Power of HABIT: Why We Do What We Do in Life and Business. A young woman walks into a laboratory. Over the past two years, she has transformed almost every aspect of her life. She has quit smoking, run a marathon, and been promoted at work. The patterns inside her brain, neurologists discover, have fundamentally changed.',
    price: 16.33,
    author: 'Charles Duhigg',
    type: 'hardcover',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/51ejXdSceNL._AA300_.jpg',
    inCart: false,
    category: 'business',
    stocked: 0
  })
);

const product2 = store.dispatch(
  addProduct({
    name: 'Think and Grow Rich',
    description:
      "'Think and Grow Rich!' explains entrepreneur Andrew Carnegie’s secret to success, revealed to Napoleon Hill during private interviews with Carnegie, the richest man of his time, and during more than 20 years of research into the lives and philosophies of more than 500 of the most successful people in America. This timeless classic presents a systematic nuts-and-bolts approach to developing the skills and mindset required to achieve exceptional success in any field or endeavor, personal or professional. Hill explains in detail 13 steps required to achieve those goals. The book contains numerous self-tests and checklists.",
    price: 8.98,
    author: 'Napoleon Hill',
    type: 'hardcover',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/51ZouHoBGtL._SX315_BO1,204,203,200_.jpg',
    inCart: false,
    category: 'business',
    stocked: 100
  })
);


// const editProduct1 = store.dispatch(
//   editProduct({
//     id: product1.product.id,
//     author: 'Poornesh',
//     category: product1.product.category,
//     description: product1.product.description,
//     img: product1.product.img,
//     inCart: product1.product.inCart,
//     name: product1.product.name,
//     price: product1.product.price,
//     type: 'paperback',
//     stocked: 10
//   })
// );
store.subscribe(()=>console.log(store.getState(),"subscribed"))
const state = store.getState();
console.log(state);
let id;
store.dispatch(addToCart(13))
store .dispatch(removeFromCart(13))
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
