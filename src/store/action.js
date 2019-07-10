import axios from "axios";

export function checkLogin() {
  if (localStorage.token && localStorage.user) {
    console.log("udah login");
    return {
      type: "CHANGE_LOGIN",
      value: true
    };
  }
  return {
    type: "CHANGE_LOGIN",
    value: false
  };
}

export function Login() {
  return {
    type: "CHANGE_LOGIN",
    value: true
  };
}

export function Logout() {
  return {
    type: "CHANGE_LOGIN",
    value: false
  };
}

export function fetchAlbumList() {
  return (dispatch, state) => {
    axios({
      method: "GET",
      url: `https://theaudiodb.com/api/v1/json/195003/searchalbum.php/?s=${encodeURI(
        "Maroon 5"
      )}`
    })
      .then(({ data }) => {
        console.log(data.album[0]);
        dispatch(returnListAlbum(data.album));
      })
      .catch(error => {
        dispatch({
          type: "ERROR_HIT_API"
        });
      });
  };
}

export default { checkLogin, Login, Logout, fetchAlbumList };

function returnListAlbum(albumList) {
  return {
    type: "CHANGE_LISTALBUM",
    value: albumList
  };
}
