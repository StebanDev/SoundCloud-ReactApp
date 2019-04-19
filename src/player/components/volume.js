import React from 'react';
import Volume from '../../icons/volume';
import './volume.css';
import Mute from '../../icons/mute';

const VolumeIcon = props => (
  <div className="Volume">
    <div className="VolumeIcon" onClick={props.handleMute}>
      {!props.mute ? (
        <Volume
          color="white"
          size={40}
          viewBox="0 0 475.082 475.081"
        />
      ) : (
        <Mute
          color="white"
          size={30}
          viewBox="0 0 347.182 347.182"
        />
      )}
    </div>
    <div className="VolumeBar" onClick={props.handleSeek}>
      <div
        className="VolumeBar-status"
        style={{ width: props.volume }}
      >
        <span className="VolumeBar-dragger" />
      </div>
    </div>
  </div>
);
export default VolumeIcon;
