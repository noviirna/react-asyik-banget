import swal from "sweetalert2";

const defaultValue = {
  isLogin: false,
  listAlbum: [],
  detailAlbum: [],
  isError: false
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
      console.log("di reducer jalanin LOGIN");
      swal.fire("Hello!", "Logged in as ...", "success");
      return {
        ...state,
        isLogin: true
      };
    case "LOGOUT":
      console.log("di reducer jalanin LOGOUT");
      swal.fire("Goodbye!", "Logged out from ...", "success");
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
