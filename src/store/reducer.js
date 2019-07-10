const defaultValue = {
  isLogin: false,
  listAlbum: [],
  detailAlbum: [],
  isError: false
};

export default function reducer(state = defaultValue, action) {
  switch (action.type) {
    case "CHANGE_LOGIN":
      console.log("di reducer (next jalanin CHANGE_LOGIN)", action.value);
      return {
        ...state,
        isLogin: action.value
      };
    case "CHANGE_LISTALBUM":
      console.log("di reducer (next jalanin CHANGE_LISTALBUM)", action.value);
      return {
        ...state,
        isError: false,
        listAlbum: action.value
      };
    case "CHANGE_DETAILALBUM":
      console.log("di reducer (next jalanin CHANGE_DETAILALBUM)", action.value);
      return {
        ...state,
        isError: false,
        detailAlbum: action.value
      };
    case "ERROR_HIT_API":
      console.log("di reducer (next jalanin ERROR_HIT_API)", action.value);
      return {
        ...state,
        isError: true
      };
    case "RESET_ALBUM_LIST_DETAIL":
      return {
        ...state,
        detailAlbum: [],
        listAlbum: []
      };
    default:
      return state;
  }
}
