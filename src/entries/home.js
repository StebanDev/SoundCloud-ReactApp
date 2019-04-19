import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
import configureStore from '../configureStore';
import { Provider } from 'react-redux';

const appContainer = document.getElementById('app');

const store = configureStore({
  search: {
    songs: [],
    loading: false
  },
  player: {
    song: {},
    pause: true,
    currentTime: 0,
    totalTime: 1,
    visible: false
  }
});
render(
  <Provider store={store}>
    <Home />
  </Provider>,
  appContainer
);
