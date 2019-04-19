import React, { Component } from 'react';
import { render } from 'react-dom';
import SC from 'soundcloud';
import Home from '../pages/containers/home';
import { createStore } from 'redux';
import configureStore from '../configureStore';
import { Provider } from 'react-redux';

const CLIENT_ID = 'NmW1FlPaiL94ueEu7oziOWjYEzZzQDcK';

// SC.initialize({
//   client_id: 'NmW1FlPaiL94ueEu7oziOWjYEzZzQDcK',
//   redirect_uri: 'http://localhost.com:9000/callback'
// });

// SC.get('/playlists/2050462').then(playlist => {
//   playlist.tracks.forEach(track => {
//     console.log(track.title);
//   });
// });

const appContainer = document.getElementById('app');

const initialStates = {};
const store = configureStore({
  data: 'hola',
  songs: [],
  song: {},
  pause: true,
  currentTime: 0,
  totalTime: 1,
  visible: false
  // streamUrl:
  //   'https://api.soundcloud.com/tracks/490066653/stream?client_id=NmW1FlPaiL94ueEu7oziOWjYEzZzQDcK'
});
console.log(store.getState());
render(
  <Provider store={store}>
    <Home />
  </Provider>,
  appContainer
);

//http://api.soundcloud.com/resolve?url=https://soundcloud.com/ultrarecords/mr-probz-waves-robin-schulz-2&client_id=NmW1FlPaiL94ueEu7oziOWjYEzZzQDcK
//http://api.soundcloud.com/resolve?url=https://soundcloud.com/ultrarecords/sets/electronic-alternative&client_id=NmW1FlPaiL94ueEu7oziOWjYEzZzQDcK
