import React, { Component } from 'react';

class BooksForm extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="row">
            <div class="input-field col s6">
              <input id="name" type="text" name="name" class="validate" />
              <label for="name">Name</label>
            </div>
            <div class="input-field col s6">
              <input id="name" type="number" name="price" class="validate" />
              <label for="name">Price</label>
            </div>
          </div>
          <div className="row">
          <div class="input-field col s6">
            <textarea
              id="description"
              name="description"
              class="materialize-textarea"
            />
            <label for="description">Description</label>
          </div>
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

          <div class="input-field col s6">
            <input id="stocked" type="number" name="stocked" class="validate" />
            <label for="stocked">Stocked</label>
          </div>
        </form>
      </div>
    );
  }
}
export default BooksForm;