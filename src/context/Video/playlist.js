import axios from "axios";
import { ToastMsg } from "../../components";

export const getAllPlaylist = async (isLoggedIn, videoDispatch) => {
  if (isLoggedIn) {
    try {
      const res = await axios.get("/api/user/playlists", {
        headers: {
          authorization: isLoggedIn,
        },
      });
      if (res.status === 200) {
        videoDispatch({
          type: "GET_ALL_PLAYLISTS",
          payload: res.data.playlists,
        });
      }
    } catch (error) {
      console.log(error);
      ToastMsg("Couldn't get playlists,try after sometime", "error");
    }
  } else {
    ToastMsg("Please Login to Continue", "warning");
  }
};

export const addNewPlaylist = async (isLoggedIn, playlist, videoDispatch) => {
  if (isLoggedIn) {
    try {
      const res = await axios.post(
        "/api/user/playlists",
        { playlist },
        {
          headers: {
            authorization: isLoggedIn,
          },
        }
      );
      if (res.status === 201) {
        videoDispatch({
          type: "ADD_NEW_PLAYLIST",
          payload: res.data.playlists,
        });
        ToastMsg("Added  new playlist", "success");
      }
    } catch (error) {
      console.log(error);
      ToastMsg("Couldn't add new playlist,try after sometime", "error");
    }
  }
};

export const deletePlaylist = async (
  isLoggedIn,
  playlistId,
  videoDispatch,
  navigate
) => {
  try {
    const res = await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: {
        authorization: isLoggedIn,
      },
    });
    if (res.status === 200) {
      videoDispatch({ type: "DELETE_PLAYLIST", payload: res.data.playlists });
      ToastMsg("Playlist Deleted", "success");
      navigate("/playlist");
    }
  } catch (error) {
    console.log(error);
    ToastMsg("Couldn't delete Playlist ", "error");
  }
};

export const addVideoToPlaylist = async (
  isLoggedIn,
  video,
  playlistId,
  videoDispatch
) => {
  if (isLoggedIn) {
    try {
      const res = await axios.post(
        `/api/user/playlists/${playlistId}`,
        { video },
        {
          headers: {
            authorization: isLoggedIn,
          },
        }
      );
      if (res.status === 201) {
        videoDispatch({
          type: "ADD_VIDEO_TO_PLAYLIST",
          payload: res.data.playlist,
        });
        ToastMsg("Video  added to Playlist", "success");
      }
    } catch (error) {
      console.log(error);
      ToastMsg("Couldn't add Video to Playlist", "error");
    }
  }
};
export const removeVideoFromPlaylist = async (
  isLoggedIn,
  playlistId,
  video,
  videoDispatch
) => {
  try {
    const res = await axios.delete(
      `/api/user/playlists/${playlistId}/${video._id}`,
      {
        headers: {
          authorization: isLoggedIn,
        },
      }
    );
    if (res.status === 200) {
      videoDispatch({
        type: "REMOVE_VIDEO_FROM_PLAYLIST",
        payload: res.data.playlist,
      });
      ToastMsg("Video removed from Playlist", "success");
    }
  } catch (error) {
    console.log(error);
    ToastMsg("Couldn't remove from Playlist", "error");
  }
};
export const isVideoPresentInPlaylist = (id, videos) =>
  videos.some((v) => v._id === id);