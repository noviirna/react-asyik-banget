import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./container/Main";
import Navbar from "./components/Navbar";
import LandingPage from "./container/LandingPage";
import NotFound from "./container/404";
import PrivateRoute from "./components/PrivateRoute";
import Auth from "./helpers/Auth";
import swal from "sweetalert2";

export default class App extends Component {
  state = {
    listAlbum: [],
    isError: false,
    isLogin: true
  };

  Logout = history => {
    Auth.logout();
    this.setState((state, props) => {
      return { isLogin: Auth.isLogin };
    });
    history.push("/");
    swal.fire("Good bye", "You are logged out", "success");
  };

  Login = history => {
    Auth.login()
      .then(() => {
        Auth.checkAuth();
        this.setState((state, props) => {
          return { isLogin: Auth.isLogin };
        });
        swal.fire("Yay", "You are logged in", "success");
        setTimeout(() => {
          history.push("/list");
        }, 500);
      })
      .catch(err => {
        swal.fire(
          "Sorry",
          "Please try again later or check your internet connection",
          "error"
        );
      });
  };

  fetchAlbumList = () => {
    console.log("nge fetch list album");
    axios({
      method: "GET",
      url: `https://theaudiodb.com/api/v1/json/195003/searchalbum.php/?s=${encodeURI(
        "Maroon 5"
      )}`
    })
      .then(({ data }) => {
        console.log(data.album[0]);
        setTimeout(() => {
          this.setState((state, props) => {
            return { listAlbum: data.album };
          });
        }, 2000);
      })
      .catch(error => {
        this.setState((state, props) => {
          return { isError: true };
        });
      });
  };

  componentDidMount() {
    Auth.checkAuth();
    this.setState((state, props) => {
      return { isLogin: Auth.isLogin };
    });
  }

  render() {
    const { listAlbum, isError, isLogin } = this.state;
    const { fetchAlbumList, Logout, Login } = this;
    return (
      <div className="h-100 d-flex flex-column">
        <Router>
          <Navbar data={{ isLogin, Logout, Login }} />
          <Switch>
            <PrivateRoute
              exact
              path="/list"
              component={Main}
              data={{ listAlbum, isError, fetchAlbumList }}
              // render={props => (
              //   <Main
              //     {...props}
              //     data={{ listAlbum, isError, fetchAlbumList }}
              //   />
              // )}
            />
            <Route exact path="/" component={LandingPage} />} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

/**
 * PAKAI FUNCTION CARANYA SEPERTI INI
 *
 * INI MOCK DATA
 * let mockData = ["lebaran", "tahun baru"];
 *
 * INI ROOT NYA
 * function App() {
 *  let state = {
 *  data: "hello"
 *  };
 *  return (
 *   <div className="container-fluid h-100 border p-5">
 *    <center>
 *      <h1>List of Indonesian Holiday in 2018</h1>
 *      {state.data}
 *    </center>
 *    <div>
 *     <ul className="list-group">
 *       {mockData.map((md, i) => (<HolidayList data={md} key={i} />))}
 *     </ul>
 *     </div>
 *   </div>
 *  );
 * }
 *
 * INI KOMPONEN NYA
 * const HolidayList = ({ data }) => ( <li className="list-group-item my-1">{data}</li>);
 *
 * INI ROOT NYA DI EXPORT SUPAYA BISA KE LOAD SAMA REACT NYA
 * export default App;
 */
