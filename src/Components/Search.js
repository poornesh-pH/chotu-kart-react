import React from 'react';
export default function Search(props) {
  return (
    <div className="search">
      <div className="input-field col s6">
        <input
          id="searchText"
          type="text"
          className="validate"
          name="searchText"
          onChange={props.setValue}
        />
        <label htmlFor="searchText">Search</label>
      </div>
      <div>
        <p>
          <label>
            <input
              type="checkbox"
              name="isAvailable"
              onChange={props.setValue}
            />
            <span>Show only available items</span>
          </label>
        </p>
      </div>
    </div>
  );
}
