const defaultValue = {
  isLogin: false
};

export default function reducer(state = defaultValue, action) {
  switch (action.type) {
    case "CHANGE_LOGIN":
      console.log("aku di reducer", action.value);
      return {
        ...state,
        isLogin: action.value
      };
    default:
      return state;
  }
}
