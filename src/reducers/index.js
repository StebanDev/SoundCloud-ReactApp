import {
  FETCH_SONGS,
  PLAY_SONG,
  PAUSE,
  CURRENT_TIME,
  TRACK_DURATION,
  LOADING_START
} from '../actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SONGS:
      return Object.assign({}, state, {
        search: {
          songs: action.tracks,
          loading: false
        }
      });
    case PLAY_SONG:
      const {
        title,
        author,
        streamUrl,
        externalUrl
      } = action.payload.song;
      return Object.assign({}, state, {
        player: {
          song: {
            title,
            author,
            streamUrl,
            externalUrl
          },
          visible: action.payload.visible
        }
      });
    case PAUSE:
      return Object.assign({}, state, {
        pause: action.pause
      });
    case CURRENT_TIME:
      return Object.assign({}, state, {
        currentTime: action.currentTime
      });
    case TRACK_DURATION:
      return Object.assign({}, state, {
        totalTime: action.totalTime
      });
    case LOADING_START:
      return Object.assign({}, state, {
        search: {
          loading: true,
          songs: []
        }
      });
    default:
      return state;
  }
};

export default reducer;
