import React from 'react';
import './player-info.css';

const PlayerInfo = props => (
  <div className="PlayerInfo">
    <div className="Song-title">{props.songTitle}</div>
    <div className="Song-user">{props.songAuthor}</div>
  </div>
);

export default PlayerInfo;
