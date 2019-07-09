import firebase from "firebase";
import firebaseConfig from "./firebaseConfig";
const Auth = {
  isLogin: false,
  checkAuth() {
    if (localStorage.token && localStorage.user) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  },
  login() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(result => {
          let token = result.credential.accessToken;
          let user = result.user;
          user = result.user.providerData[0];
          let { email, displayName, photoURL } = user;
          localStorage.token = token;
          localStorage.user = JSON.stringify({ email, displayName, photoURL });
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  logout() {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          localStorage.clear();
          this.isLogin = false;
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};

export default Auth;
