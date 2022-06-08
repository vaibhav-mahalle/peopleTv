export const videoReducer = (state, { type, payload }) => {
  switch (type) {
      case "SET_VIDEOS":
          return {...state, videos: payload};
    case "LIKE_VIDEO":
    case "UNLIKE_VIDEO":
    case "GET_ALL_LIKED_VIDEOS":
      return { ...state, liked: payload };
    case "ADD_TO_WATCHLATER":
    case "REMOVE_FROM_WATCHLATER":
    case "REMOVE_ALL_FROM_WATCHLATER":
    case "GET_WATCHLATER":
      return { ...state, watchLater: payload};
    case "ADD_TO_HISTORY":
    case "REMOVE_FROM_HISTORY":
    case "GET_HISTORY":
    case "REMOVE_ALL_FROM_HISTORY":
      return { ...state, history: payload};
    case "GET_ALL_PLAYLIST":
    case "DELETE_PLAYLIST":
    case "ADD_NEW_PLAYLIST":
      return { ...state, playlist: payload};
    case "ADD_VIDEO_TO_PLAYLIST":
    case "REMOVE_VIDEO_FROM_PLAYLIST":
      return {};
    default:
      return { ...state };
  }
};
