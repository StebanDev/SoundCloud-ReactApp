export const FETCH_SONGS = 'FETCH_SONGS';
export const PLAY_SONG = 'PLAY_SONG';
export const PAUSE = 'PAUSE';
export const CURRENT_TIME = 'CURRENT_TIME';
export const TRACK_DURATION = 'TRACK_DURATION';
export const LOADING_START = 'LOADING_START';

const getSongs = data => {
  return {
    type: FETCH_SONGS,
    tracks: data
  };
};

export const searchSongs = query => {
  return dispatch => {
    fetch(
      `https://api.soundcloud.com/tracks/?client_id=NmW1FlPaiL94ueEu7oziOWjYEzZzQDcK&q=${query}&limit=20`
    )
      .then(res => res.json())
      .then(json => {
        dispatch(getSongs(json));
      });
  };
};

export const playSong = ({
  title,
  author,
  streamUrl,
  externalUrl
}) => {
  return {
    type: PLAY_SONG,
    payload: {
      song: {
        title,
        author,
        streamUrl,
        externalUrl
      },
      visible: true
    }
  };
};

export const pausePlayer = status => {
  return {
    type: PAUSE,
    pause: status
  };
};

export const setCurrentTime = time => {
  return {
    type: CURRENT_TIME,
    currentTime: time
  };
};

export const setTrackDuration = time => {
  return {
    type: TRACK_DURATION,
    totalTime: time
  };
};

export const setLoadingStart = () => {
  return {
    type: LOADING_START
  };
};
