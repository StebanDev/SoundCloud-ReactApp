import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pausePlayer, setTrackDuration } from '../../actions';

class Audio extends Component {
  componentWillReceiveProps(nextProps) {
    const { pause, streamUrl } = nextProps;
    console.log('streamUrl', streamUrl);
    if (pause) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
  }
  setRef = element => {
    this.audio = element;
  };
  playAudio = () => {
    this.props.dispatch(pausePlayer(false));
    this.props.dispatch(setTrackDuration(this.audio.duration));
    this.audio.play();
  };
  render() {
    return (
      <div className="Player-Audio">
        <audio
          ref={this.setRef}
          src={this.props.src}
          onCanPlay={this.playAudio}
          onTimeUpdate={this.props.handleTimeUpdate}
          onLoadedMetadata={this.props.handleLoadedMetadata}
          onEnded={this.props.handleEnded}
        />
      </div>
    );
  }
}

export default connect()(Audio);
