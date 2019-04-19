import React from 'react';
import Play from '../../icons/play';
import Pause from '../../icons/pause';
import './play-pause.css';

const PlayPause = props => (
  <div className="PlayPause" onClick={props.handlePlay}>
    {props.pause ? (
      <Play size={60} color="white" />
    ) : (
      <Pause size={60} color="white" />
    )}
  </div>
);

export default PlayPause;
