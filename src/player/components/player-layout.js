import React from 'react';
import './player-layout.css';

const Player = props => {
  return props.visible ? (
    <div className="Player">{props.children}</div>
  ) : null;
};

export default Player;
