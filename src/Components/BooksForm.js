import React, { Component } from 'react';

class BooksForm extends Component {
  state = {
    description: '',
    name: '',
    price: '',
    author: '',
    type: '',
    img: '',
    category: '',
    stocked: ''
  };

  render() {
    const onFormSubmit = e => {
      e.preventDefault();
      console.log(e.target.value)
      this.setState({
        // [e.target.name]: e.target.value
      });
    };
    console.log(this.state)
    return (
      <div>
        <form onSubmit={onFormSubmit}>
          <div className="row">
            <div class="input-field col s6">
              <input id="name" type="text" name="name" class="validate" />
              <label for="name">Name</label>
            </div>
            <div class="input-field col s6">
              <textarea
                id="description"
                name="description"
                class="materialize-textarea"
              />
              <label for="description">Description</label>
            </div>
            <div class="input-field col s6">
              <input id="name" type="number" name="price" class="validate" />
              <label for="name">Price</label>
            </div>
            <div class="input-field col s6">
              <input
                id="stocked"
                type="number"
                name="stocked"
                class="validate"
              />
              <label for="stocked">Stocked</label>
            </div>

            <div className="row">
              <div class="input-field col s6">
                <input id="author" name="author" type="text" class="validate" />
                <label for="author">Author</label>
              </div>
              <div class="input-field col s6">
                <input id="type" name="type" type="text" class="validate" />
                <label for="type">Type</label>
              </div>
            </div>

            <div className="row">
              <div class="input-field col s6">
                <input id="img" name="img" type="text" class="validate" />
                <label for="img">Image URL</label>
              </div>
              <div class="input-field col s6">
                <input
                  id="category"
                  name="category"
                  type="text"
                  class="validate"
                />
                <label for="category">Category</label>
              </div>
            </div>
            <button
              class="btn waves-effect waves-light col s12"
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
