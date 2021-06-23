import React, { Component } from 'react';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      name: '',
      price: '',
      author: '',
      type: '',
      img: '',
      category: '',
      stocked: ''
    };
  }
  onFormSubmit = e => {
    e.preventDefault();
    

  };
  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="name"
                type="text"
                name="name"
                onChange={this.handleChange}
                className="validate"
                required
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field col s6">
              <textarea
                id="description"
                name="description"
                className="materialize-textarea"
                required
              />
              <label htmlFor="description">Description</label>
            </div>
            <div className="input-field col s6">
              <input
                id="price"
                type="number"
                name="price"
                className="validate"
                min={0}
                required
              />
              <label htmlFor="price">Price</label>
            </div>
            <div className="input-field col s6">
              <input
                id="stocked"
                type="number"
                name="stocked"
                className="validate"
                min={0}
                required
              />
              <label htmlFor="stocked">Stocked</label>
            </div>

            <div className="row">
              <div className="input-field col s6">
                <input
                  id="author"
                  name="author"
                  type="text"
                  className="validate"
                  required
                />
                <label htmlFor="author">Author</label>
              </div>

              <div className="input-field col s6">
                <input id="type" name="type" type="text" className="validate" required/>
                <label htmlFor="type">Type</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s6">
                <input id="img" name="img" type="text" className="validate" required/>
                <label htmlFor="img">Image URL</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="category"
                  name="category"
                  type="text"
                  className="validate"
                  required
                />
                <label htmlFor="category">Category</label>
              </div>
            </div>
            <button
              className="btn waves-effect waves-light col s12"
              type="submit"
              name="action"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default BooksForm;
