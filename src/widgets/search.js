import React from 'react';
import './search.css';

const Search = props => (
  <div className="Search">
    <form onSubmit={props.handleSubmit}>
      <input
        className="Search-input"
        type="text"
        name="song"
        placeholder="Enter your favorite song"
        ref={props.setRef}
      />
      <span className="Search-input-icon" />
    </form>
  </div>
);

export default Search;
