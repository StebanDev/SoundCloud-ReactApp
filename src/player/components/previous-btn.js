import React from 'react';
import Previous from '../../icons/previous';
import './previous-btn.css';

const PreviousBtn = props => (
  <div className="PreviousBtn" onClick={props.handleClick}>
    <Previous color="white" size={40} />
  </div>
);

export default PreviousBtn;
