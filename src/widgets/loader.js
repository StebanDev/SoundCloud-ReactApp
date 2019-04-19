import React from 'react';
import './loader.css';

const Loader = props => {
  if (!props.active) return null;
  return (
    <div className="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Loader;
