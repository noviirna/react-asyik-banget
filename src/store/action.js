import axios from "axios";

export function checkLogin() {
  console.log("action checkLogin()");
  if (localStorage.token && localStorage.user) {
    console.log("isLogin = true");
    return {
      type: "CHANGE_LOGIN",
      value: true
    };
  }
  console.log("isLogin = false");
  return {
    type: "CHANGE_LOGIN",
    value: false
  };
}

export function Login() {
  console.log("action Login()");
  return {
    type: "LOGIN"
  };
}

export function Logout() {
  console.log("action Logout()");

  return {
    type: "LOGOUT"
  };
}

export function resetAlbumListAndDetail() {
  console.log("action resetAlbumListAndDetail()");
  return {
    type: "RESET_ALBUM_LIST_DETAIL"
  };
}

export function fetchAlbumList() {
  console.log("action fetchAlbumList()");
  return (dispatch, state) => {
    axios({
      method: "GET",
      url: `https://theaudiodb.com/api/v1/json/195003/searchalbum.php/?s=${encodeURI(
        "Maroon 5"
      )}`
    })
      .then(({ data }) => {
        console.log(data.album);
        dispatch(returnListAlbum(data.album));
      })
      .catch(error => {
        dispatch(returnErrorHitApi());
      });
  };
}

export function fetchAlbumDetail(id) {
  console.log("action fetchAlbumDetail()");
  return (dispatch, state) => {
    axios({
      method: "GET",
      url: `https://theaudiodb.com/api/v1/json/195003/album.php/?m=${id}`
    })
      .then(({ data }) => {
        dispatch(returnDetailAlbum(data.album[0]));
      })
      .catch(error => {
        dispatch(returnErrorHitApi());
      });
  };
}

export default { checkLogin, Login, Logout, fetchAlbumList };

// FUNGSI RETURN UNTUK YANG ASYNC AJA DEH YAA BIAR ADA VARIASI

function returnListAlbum(albumList) {
  return {
    type: "CHANGE_LISTALBUM",
    value: albumList
  };
}

function returnDetailAlbum(data) {
  return {
    type: "CHANGE_DETAILALBUM",
    value: data
  };
}

function returnErrorHitApi() {
  return {
    type: "ERROR_HIT_API"
  };
}
