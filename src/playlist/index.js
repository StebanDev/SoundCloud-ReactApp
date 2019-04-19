import React, { Component } from 'react';
import Song from '../song';
import { connect } from 'react-redux';
import './playlist.css';

class Playlist extends Component {
  render() {
    return (
      <div className="Playlist">
        {this.props.songs.map(song => {
          const {
            artwork_url,
            title,
            genre,
            user,
            id,
            permalink_url: url,
            stream_url
          } = song;
          const cover = artwork_url
            ? artwork_url.replace('large', 't500x500')
            : '';
          return (
            <Song
              cover={cover}
              title={title}
              username={user.username}
              genre={genre}
              key={id}
              url={url}
              streamUrl={stream_url}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { songs } = state.search;
  return {
    songs
  };
};

export default connect(mapStateToProps)(Playlist);
