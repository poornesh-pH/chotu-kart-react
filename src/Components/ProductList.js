import React from 'react';

export default function ProductList(props) {
  console.log(props, 'product list props');
  return (
    <div>
      <div classNameName="heading">
        <h5>Name</h5>
        <h5>Price</h5>
      </div>
      {/* <h6>Shopping Goods</h6> */}
      {/* <ul classNameName="collection">
        {props.filteredProducts.map(product => {
          if (product.category == 'Sporting Goods') {
            return (
              <div key={product.name.toString()}>
                <li classNameName="collection-item">
                  {product.name}
                  <div classNameName="secondary-content">{product.price}</div>
                </li>
              </div>
            );
          }
        })}
      </ul>
      <h6>Electronics</h6>
      <ul classNameName="collection">
        {props.filteredProducts.map(product => {
          if (product.category == 'Electronics') {
            return (
              <div key={product.name.toString()}>
                <li classNameName="collection-item">
                  {product.name}
                  <div classNameName="secondary-content">{product.price}</div>
                  <div><button>add to kart</button> </div>
                </li>
              </div>
            );
          }
        })}
      </ul> */}
      {props.filteredProducts.map(product => {
        return (
          <div key={product.id}>
            <div className="col s12 m6">
              <div className="row">
                <div className="col s12 m12">
                  <div className="card">
                    <div className="card-image">
                      <img src={product.img} />
                      <a className="btn-floating halfway-fab waves-effect waves-light red">
                        <i className="material-icons">add</i>
                      </a>
                    </div>
                    <div className="card-content">
                      <span className="card-title">{product.name}</span>
                      <p>
                        I am a very simple card. I am good at containing small
                        bits of information. I am convenient because I require
                        little markup to use effectively.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
