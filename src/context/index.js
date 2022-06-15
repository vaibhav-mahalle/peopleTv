export { isVideoLiked, LikeVideo, unLikeVideo } from "./Video/liked";

export {
  addToHistory,
  deleteAllFromHistory,
  deleteFromHistory,
  getAllHistory,
  isVideoInHistory
} from "./Video/history";

export {
  addToWatchLater,
  isVideoInwatchLater,
  removeFromWatchLater,
} from "./Video/watchlater";

export { AuthProvider, useAuth } from "./Auth/context";
export { useVideo, VideoProvider } from "./Video/context";

export {
  addNewPlaylist,
  addVideoToPlaylist,
  getAllPlaylist,
  isVideoPresentInPlaylist,
  removeVideoFromPlaylist,
} from "./Video/playlist";