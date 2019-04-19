import React from 'react';
import './timer.css';

const leftPad = num => `0${num}`.substr(-2);

const formatTime = secs =>
  `${leftPad(~~(secs / 60))}:${leftPad(~~(secs % 60))}`;

const Timer = props => (
  <div className="Timer">
    <span>
      {formatTime(props.currentTime)} / {formatTime(props.duration)}
    </span>
  </div>
);

export default Timer;
