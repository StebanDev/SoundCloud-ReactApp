import React, { Component } from 'react';
import SC from 'soundcloud';
import './song.css';
import { playSong } from '../actions';
import { connect } from 'react-redux';

SC.initialize({
  client_id: 'NmW1FlPaiL94ueEu7oziOWjYEzZzQDcK'
});

// stream track id 293
// SC.stream('/tracks/197494692').then(function(player) {
//   player
//     .play()
//     .then(function() {
//       console.log('Playback started!');
//     })
//     .catch(function(e) {
//       console.error(
//         'Playback rejected. Try calling play() from a user interaction.',
//         e
//       );
//     });
// });

class Song extends Component {
  handlePlaySong = event => {
    console.log(event.currentTarget);
    document
      .querySelectorAll('.Song')
      .forEach(el => el.classList.remove('selected'));
    event.currentTarget.classList.add('selected');
    this.props.dispatch(
      playSong({
        title: this.props.title,
        author: this.props.username,
        streamUrl:
          this.props.streamUrl +
          '?client_id=NmW1FlPaiL94ueEu7oziOWjYEzZzQDcK',
        externalUrl: this.props.url
      })
    );
  };
  render() {
    return (
      <div className="Song" onClick={this.handlePlaySong}>
        <figure className="Song-cover">
          <div
            src={this.props.cover}
            className="Song-cover-image"
            style={
              this.props.cover != ''
                ? {
                    backgroundImage: `url(${this.props.cover})`
                  }
                : { opacity: 1 }
            }
          />
        </figure>
        <div className="Song-info">
          <p className="Song-title">{this.props.title}</p>
          <p className="Song-user">{this.props.username}</p>
          <p className="Song-genre">{this.props.genre}</p>
          <p className="Song-url">{this.props.url}</p>
        </div>
      </div>
    );
  }
}

export default connect()(Song);
