import React, { Component } from 'react';
import PlayerLayout from '../components/player-layout';
import PlayPause from '../components/play-pause';
import Controls from '../components/player-controls';
import Audio from '../components/audio';
import { connect } from 'react-redux';
import { pausePlayer } from '../../actions';
import ProgressBar from '../components/progress-bar';
import Timer from '../components/timer';
import PlayerInfo from '../components/player-info';
import PreviousBtn from '../components/previous-btn';
import NextBtn from '../components/next-btn';
import VolumeIcon from '../components/volume';
import ExternalLink from '../components/external-link';

class Player extends Component {
  state = {
    pause: true,
    currentTime: 0,
    duration: 1,
    visible: false,
    volume: 1,
    volumeP: 100,
    mute: false
  };
  handlePlayToggle = event => {
    console.log('status ', this.props.pause);
    this.props.dispatch(pausePlayer(!this.props.pause));
    this.setState({
      pause: !this.state.pause
    });
  };
  handleLoadedMetadata = event => {
    this.audio = event.target;
    this.progressbar = document.querySelector('.ProgressBar');
    console.log('metadata loaded', this.audio.duration);
    this.setState({
      duration: this.audio.duration
    });
  };
  handleTimeUpdate = event => {
    this.setState({
      currentTime: this.audio.currentTime,
      progress: this.calculateProgress(this.audio.currentTime)
    });
  };
  calculateProgress = currentTime => {
    const { duration } = this.state;
    return (currentTime / duration) * 100 + '%';
  };
  handleSeek = event => {
    const currentPosition =
      event.nativeEvent.clientX / this.progressbar.offsetWidth;
    var rect = event.target.getBoundingClientRect();
    var x = event.clientX - rect.left; //x position within the element.
    var y = event.clientY - rect.top; //y position within the element.
    const currentTime = currentPosition * this.state.duration;
    console.log('offsetX', event.nativeEvent.offsetX);
    console.log('clientX', event.clientX);
    console.log('rect', rect);
    console.log('offsetWidth', this.progressbar.offsetWidth);
    console.log('currentTime', currentTime);
    this.audio.currentTime = currentTime;
    this.setState({
      progress: currentPosition * 100 + '%'
    });
  };
  handlePreviousSong = event => {
    const currentSong = document.querySelector('.Song.selected');
    const previousSong = currentSong.previousElementSibling;
    const currentTime = this.state.currentTime;
    if (currentTime > 4) {
      this.audio.currentTime = 0;
    } else {
      if (previousSong) previousSong.click();
    }
  };
  handleNextSong = event => {
    const currentSong = document.querySelector('.Song.selected');
    const nextSong = currentSong.nextElementSibling;
    if (nextSong) nextSong.click();
  };
  handlePlaybackEnd = event => {
    this.props.dispatch(pausePlayer(true));
    this.handleNextSong();
    console.log('audio ended');
  };
  handleVolumeChange = event => {
    const rect = event.currentTarget.getBoundingClientRect();
    const position = event.nativeEvent.clientX - rect.left;
    const volume = position >= 0 ? position : 0;
    this.setState({
      volume: volume / 100,
      volumeP: volume + '%'
    });
    this.audio.volume = volume / 100;
  };
  handleToggleMute = event => {
    this.setState({
      prevVolume: this.audio.volume
    });

    if (this.audio.volume > 0) {
      console.log('muted');
      this.audio.volume = 0;
      this.setState({
        volumeP: '0%',
        mute: true
      });
    } else {
      console.log('not muted');
      this.audio.volume = this.state.prevVolume;
      this.setState({
        volumeP: this.state.prevVolume * 100 + '%',
        mute: false
      });
    }
  };
  render() {
    return (
      <PlayerLayout visible={this.props.visible}>
        <Audio
          pause={this.props.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleEnded={this.handlePlaybackEnd}
          src={this.props.song.streamUrl}
        />
        <ProgressBar
          progress={this.state.progress}
          handleSeek={this.handleSeek}
        />
        <PlayerInfo
          songTitle={this.props.song.title}
          songAuthor={this.props.song.author}
        />
        <Controls>
          <PreviousBtn handleClick={this.handlePreviousSong} />
          <PlayPause
            pause={this.props.pause}
            handlePlay={this.handlePlayToggle}
          />
          <NextBtn handleClick={this.handleNextSong} />
          <VolumeIcon
            volume={this.state.volumeP}
            handleSeek={this.handleVolumeChange}
            handleMute={this.handleToggleMute}
            mute={this.state.mute}
          />
          <Timer
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
          <ExternalLink url={this.props.song.externalUrl} />
        </Controls>
      </PlayerLayout>
    );
  }
}

const mapStateToProps = state => {
  console.log('status2', state.pause);
  const { title, author, streamUrl, externalUrl } = state.song;
  return {
    pause: state.pause,
    song: {
      title,
      author,
      streamUrl,
      externalUrl
    },
    visible: state.visible
  };
};

export default connect(mapStateToProps)(Player);
