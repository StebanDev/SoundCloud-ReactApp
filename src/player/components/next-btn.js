import React from 'react';
import Next from '../../icons/next';
import './next-btn.css';

const NextBtn = props => (
  <div className="NextBtn" onClick={props.handleClick}>
    <Next color="white" size={40} />
  </div>
);

export default NextBtn;
