const defaultValue = {
  isLogin: false,
  listAlbum: [],
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
    case "ERROR_HIT_API":
      console.log("di reducer (next jalanin ERROR_HIT_API)", action.value);
      return {
        ...state,
        isError: true
      };
    default:
      return state;
  }
}
