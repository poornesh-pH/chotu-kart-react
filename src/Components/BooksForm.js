import React, { Component } from 'react';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.book ? this.props.book.description : '',
      name: this.props.book ? this.props.book.name : '',
      price: this.props.book ? this.props.book.price : '',
      author: this.props.book ? this.props.book.author : '',
      type: this.props.book ? this.props.book.type : '',
      img: this.props.book ? this.props.book.img : '',
      category: this.props.book ? this.props.book.category : '',
      stocked: this.props.book ? this.props.book.stocked : ''
    };
  }
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state)
  };
  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.props, 'booksform');
    return (
      <div>
        {/* {this.props.book.description} */}
        <form onSubmit={this.onFormSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input
                //  placeholder="Name"
                id="name"
                type="text"
                name="name"
                onChange={this.handleChange}
                className="validate"
                value={this.state.name}
                required
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field col s6">
              <textarea
                id="description"
                name="description"
                className="materialize-textarea"
                value={this.state.description}
                onChange={this.handleChange}
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
                value={this.state.price}
                onChange={this.handleChange}
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
                value={this.state.stocked}
                onChange={this.handleChange}
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
                  value={this.state.author}
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="author">Author</label>
              </div>

              <div className="input-field col s6">
                <input
                  id="type"
                  name="type"
                  type="text"
                  className="validate"
                  value={this.state.type}
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="type">Type</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s6">
                <input
                  id="img"
                  name="img"
                  type="text"
                  className="validate"
                  value={this.state.img}
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="img">Image URL</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="category"
                  name="category"
                  type="text"
                  className="validate"
                  value={this.state.category}
                  onChange={this.handleChange}
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
