import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import { connect } from 'react-redux';
import { searchSongs, setLoadingStart } from '../../actions';
import Playlist from '../../playlist';
import Search from '../../widgets/search';
import Player from '../../player/containers/player';
import Loader from '../../widgets/loader';

class Home extends Component {
  constructor() {
    super();
  }
  handleSubmit = event => {
    const query = this.input.value;
    event.preventDefault();
    this.props.dispatch(setLoadingStart());
    this.props.dispatch(searchSongs(query));
    document.querySelector('.Logo').classList.add('active');
    document.querySelector('.Title').classList.add('active');
    document.querySelector('.Header').classList.add('active');
  };
  setInputRef = element => {
    this.input = element;
  };
  render() {
    return (
      <HomeLayout>
        <Search
          handleSubmit={this.handleSubmit}
          setRef={this.setInputRef}
        />
        <Loader active={this.props.loading} />
        <Playlist />
        <Player />
      </HomeLayout>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.search.loading
  };
};

export default connect(mapStateToProps)(Home);
