import React from 'react';

export default function ProductList(props) {
  console.log(props, 'product list props');
  return (
    <div>
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
                        {product.description.slice(0,150)+"..."}
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
