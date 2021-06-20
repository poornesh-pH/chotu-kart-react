import React, { Component } from 'react';

class BooksForm extends Component {
  render() {
    return (
      <div>
        <form>
          <div class="input-field col s6">
            <input id="name" type="text" class="validate" />
            <label for="name">Name</label>
          </div>
          <div class="input-field">
            <textarea
              id="description"
              name="description"
              class="materialize-textarea"
            />
            <label for="description">Description</label>
          </div>
          <div class="input-field">
            <input id="name" type="text" class="validate" />
            <label for="name">Name</label>
          </div>
        </form>
      </div>
    );
  }
}
export default BooksForm;
