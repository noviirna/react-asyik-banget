import swal from "sweetalert2";

const defaultValue = {
  isLogin: false,
  listAlbum: [],
  detailAlbum: [],
  isError: false,
  detailArtist: undefined
};

export default function reducer(state = defaultValue, action) {
  switch (action.type) {
    case "CHANGE_LOGIN":
      console.log("di reducer jalanin CHANGE_LOGIN");
      return {
        ...state,
        isLogin: action.value
      };
    case "LOGIN":
      let name = JSON.parse(localStorage.user).displayName;
      swal.fire("Hello!", `Logged in as ${name}`, "success");
      return {
        ...state,
        isLogin: true
      };
    case "LOGOUT":
      swal.fire("Goodbye!", "Logged out", "success");
      return {
        ...state,
        isLogin: false
      };
    case "CHANGE_LISTALBUM":
      console.log("di reducer jalanin CHANGE_LISTALBUM");
      return {
        ...state,
        isError: false,
        listAlbum: action.value
      };
    case "CHANGE_DETAILALBUM":
      console.log("di reducer jalanin CHANGE_DETAILALBUM");
      return {
        ...state,
        isError: false,
        detailAlbum: action.value
      };
    case "CHANGE_DETAILARTIST":
      console.log("di reducer jalanin CHANGE_DETAILARTIST");
      return {
        ...state,
        isError: false,
        detailArtist: action.value
      };
    case "ERROR_HIT_API":
      console.log("di reducer jalanin ERROR_HIT_API");
      return {
        ...state,
        isError: true
      };
    case "RESET_ALBUM_LIST_DETAIL":
      console.log("di reducer jalanin RESET_ALBUM_LIST_DETAIL");
      return {
        ...state,
        isError: false,
        detailAlbum: [],
        listAlbum: []
      };
    default:
      return state;
  }
}
