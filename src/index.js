import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'materialize-css/dist/css/materialize.min.css';
import configureStore from './Redux/Store/store'
import {Provider} from 'react-redux';
import {addProduct} from './Redux/Actions/productsAction'
const store = configureStore()

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
const state = store.getState();
console.log(state)
const jsx = (
  <Provider store={store}><App /></Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
