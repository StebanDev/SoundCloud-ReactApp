import React from 'react';
import './progress-bar.css';

const ProgressBar = props => (
  <div className="ProgressBar" onClick={props.handleSeek}>
    <div
      className="ProgressBar-status"
      style={{ width: props.progress }}
    >
      <span className="ProgressBar-dragger" />
    </div>
  </div>
);

export default ProgressBar;
