import React from 'react';
import { connect } from 'react-redux';
const BooksCards = props =>
  // console.log(props, 'customer props'),
  {
    return (
      <div className="row card-container">
        {/* change orientation */}
        {props.books.map(item => (
          <div className="col l4 s12 m6">
            <div className="card" key={item.id}>
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={item.img} />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  {item.name}
                  <i className="material-icons right">more_vert</i>
                </span>
                <p>
                  <a href="#">This is a link</a>
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  {item.name}
                  <i className="material-icons right">close</i>
                </span>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );

    {
      /* <div className="row">
        <div classNameName="col s12 m6">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src="images/office.jpg" />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                Card Title<i className="material-icons right">more_vert</i>
              </span>
              <p>
                <a href="#">This is a link</a>
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Card Title<i className="material-icons right">close</i>
              </span>
              <p>
                Here is some more information about this product that is only
                revealed once clicked on.
              </p>
            </div>
          </div>
        </div>
      </div> */
    }
  };
const mapStateToProps = state => {
  return {
    books: state.products
  };
};
export default connect(mapStateToProps)(BooksCards);
