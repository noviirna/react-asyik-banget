export function checkLogin() {
  if (localStorage.token && localStorage.user) {
    return {
      type: "CHANGE_LOGIN",
      value: true
    };
  } else {
    return {
      type: "CHANGE_LOGIN",
      value: false
    };
  }
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

export default { checkLogin, Login, Logout };
